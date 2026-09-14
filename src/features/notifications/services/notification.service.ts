import { supabase } from '@/lib/supabase';
import { NotificationItem, NotificationType } from '../types/notification.types';
import { useAuthStore } from '@/features/auth/store/auth.store';

const LOCAL_STORAGE_NOTIFS_KEY = 'skillora_user_notifications';

export const NotificationService = {
  /**
   * Fetches the user's notifications ordered chronologically.
   */
  getUserNotifications: async (userId?: string): Promise<NotificationItem[]> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    if (effectiveUserId) {
      try {
        const { data, error } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', effectiveUserId)
          .order('created_at', { ascending: false })
          .limit(30);

        if (!error && data) {
          const items: NotificationItem[] = data.map((n: any) => ({
            id: n.id,
            userId: n.user_id,
            title: n.title,
            message: n.message,
            type: (n.type as NotificationType) || 'info',
            isRead: Boolean(n.is_read),
            actionUrl: n.action_url || undefined,
            createdAt: new Date(n.created_at),
          }));

          try {
            localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(items));
          } catch (_) {}

          return items;
        }
      } catch (err) {
        console.warn('[NotificationService] Supabase fetch error, checking local cache:', err);
      }
    }

    // Fallback to local storage
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        return parsed.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
      }
    } catch (_) {}

    return [];
  },

  /**
   * Marks a single notification as read.
   */
  markAsRead: async (id: string): Promise<void> => {
    try {
      await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('id', id);
    } catch (err) {
      console.warn('[NotificationService] Error updating notification:', err);
    }

    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (cached) {
        const list: NotificationItem[] = JSON.parse(cached);
        const updated = list.map((item) => (item.id === id ? { ...item, isRead: true } : item));
        localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(updated));
      }
    } catch (_) {}
  },

  /**
   * Marks all unread notifications as read.
   */
  markAllAsRead: async (userId?: string): Promise<void> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    if (effectiveUserId) {
      try {
        await supabase
          .from('notifications')
          .update({ is_read: true })
          .eq('user_id', effectiveUserId)
          .eq('is_read', false);
      } catch (err) {
        console.warn('[NotificationService] Error marking all notifications read:', err);
      }
    }

    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (cached) {
        const list: NotificationItem[] = JSON.parse(cached);
        const updated = list.map((item) => ({ ...item, isRead: true }));
        localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(updated));
      }
    } catch (_) {}
  },

  /**
   * Deletes a notification by ID.
   */
  deleteNotification: async (id: string): Promise<void> => {
    try {
      await supabase.from('notifications').delete().eq('id', id);
    } catch (err) {
      console.warn('[NotificationService] Error deleting notification:', err);
    }

    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (cached) {
        const list: NotificationItem[] = JSON.parse(cached);
        const updated = list.filter((item) => item.id !== id);
        localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(updated));
      }
    } catch (_) {}
  },

  /**
   * Creates an event-driven notification (e.g. milestone, certificate, payment).
   */
  createNotification: async ({
    userId,
    title,
    message,
    type = 'info',
    actionUrl,
  }: {
    userId?: string;
    title: string;
    message: string;
    type?: NotificationType;
    actionUrl?: string;
  }): Promise<NotificationItem> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    const newNotif: NotificationItem = {
      id: `notif_${Date.now()}`,
      userId: effectiveUserId || 'guest',
      title,
      message,
      type,
      isRead: false,
      actionUrl,
      createdAt: new Date(),
    };

    if (effectiveUserId && effectiveUserId !== 'guest') {
      try {
        const { data, error } = await supabase
          .from('notifications')
          .insert([
            {
              user_id: effectiveUserId,
              title,
              message,
              type,
              is_read: false,
              action_url: actionUrl || null,
            },
          ])
          .select()
          .single();

        if (!error && data) {
          newNotif.id = data.id;
        }
      } catch (err) {
        console.warn('[NotificationService] Error inserting notification to Supabase:', err);
      }
    }

    // Cache locally
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      const list: NotificationItem[] = cached ? JSON.parse(cached) : [];
      list.unshift(newNotif);
      localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(list.slice(0, 30)));
    } catch (_) {}

    return newNotif;
  },
};
