import { useState, useEffect, useCallback } from 'react';
import { NotificationItem } from '../types/notification.types';
import { NotificationService } from '../services/notification.service';
import { useAuthStore } from '@/features/auth/store/auth.store';

export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const authUser = useAuthStore((state) => state.user);

  const loadNotifications = useCallback(async () => {
    try {
      const data = await NotificationService.getUserNotifications(authUser?.id);
      setNotifications(data);
    } catch (err) {
      console.warn('[useNotifications] Error loading notifications:', err);
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const markAsRead = async (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
    await NotificationService.markAsRead(id);
  };

  const markAllAsRead = async () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    await NotificationService.markAllAsRead(authUser?.id);
  };

  const deleteNotification = async (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    await NotificationService.deleteNotification(id);
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return {
    notifications,
    unreadCount,
    isLoading,
    isOpen,
    setIsOpen,
    toggleOpen: () => setIsOpen((prev) => !prev),
    markAsRead,
    markAllAsRead,
    deleteNotification,
    refreshNotifications: loadNotifications,
  };
}
