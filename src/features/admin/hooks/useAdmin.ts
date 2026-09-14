import { useState, useEffect, useCallback } from 'react';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { AdminService } from '../services/admin.service';
import {
  AdminOverviewMetrics,
  AdminUserRecord,
  AdminModerationItem,
  AdminAnalyticsData,
  UserFilterOptions,
} from '../types/admin.types';

export const useAdmin = () => {
  const user = useAuthStore((state) => state.user);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'analytics' | 'moderation'>('overview');

  // Overview metrics state
  const [metrics, setMetrics] = useState<AdminOverviewMetrics | null>(null);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(false);

  // Users state
  const [users, setUsers] = useState<AdminUserRecord[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [userFilters, setUserFilters] = useState<UserFilterOptions>({
    searchQuery: '',
    planFilter: 'all',
    statusFilter: 'all',
    roleFilter: 'all',
  });

  // Moderation state
  const [moderationItems, setModerationItems] = useState<AdminModerationItem[]>([]);
  const [isLoadingModeration, setIsLoadingModeration] = useState(false);

  // Analytics state
  const [analytics, setAnalytics] = useState<AdminAnalyticsData | null>(null);
  const [isLoadingAnalytics, setIsLoadingAnalytics] = useState(false);

  // Action status state
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Check admin status on auth change
  useEffect(() => {
    let isMounted = true;

    const verifyAdmin = async () => {
      setIsLoadingAuth(true);
      if (!user) {
        if (isMounted) {
          setIsAdmin(false);
          setIsLoadingAuth(false);
        }
        return;
      }

      // Immediate pre-check: if authenticated role is explicitly non-admin, deny instantly
      if (user.role && user.role !== 'admin') {
        if (isMounted) {
          setIsAdmin(false);
          setIsLoadingAuth(false);
        }
        return;
      }

      const adminStatus = await AdminService.checkIsAdmin(user.id);
      if (isMounted) {
        setIsAdmin(adminStatus);
        setIsLoadingAuth(false);
      }
    };

    verifyAdmin();

    return () => {
      isMounted = false;
    };
  }, [user]);

  // Load Overview metrics
  const loadMetrics = useCallback(async () => {
    setIsLoadingMetrics(true);
    try {
      const data = await AdminService.getOverviewMetrics();
      setMetrics(data);
    } catch (err: any) {
      console.error('[useAdmin] Error loading metrics:', err);
    } finally {
      setIsLoadingMetrics(false);
    }
  }, []);

  // Load Users with current filters
  const loadUsers = useCallback(async (filters: UserFilterOptions = userFilters) => {
    setIsLoadingUsers(true);
    try {
      const data = await AdminService.getUsers(filters);
      setUsers(data);
    } catch (err: any) {
      console.error('[useAdmin] Error loading users:', err);
    } finally {
      setIsLoadingUsers(false);
    }
  }, [userFilters]);

  // Load Moderation items
  const loadModeration = useCallback(async () => {
    setIsLoadingModeration(true);
    try {
      const data = await AdminService.getModerationItems();
      setModerationItems(data);
    } catch (err: any) {
      console.error('[useAdmin] Error loading moderation items:', err);
    } finally {
      setIsLoadingModeration(false);
    }
  }, []);

  // Load Analytics
  const loadAnalytics = useCallback(async () => {
    setIsLoadingAnalytics(true);
    try {
      const data = await AdminService.getAnalytics();
      setAnalytics(data);
    } catch (err: any) {
      console.error('[useAdmin] Error loading analytics:', err);
    } finally {
      setIsLoadingAnalytics(false);
    }
  }, []);

  // Trigger loads based on active tab
  useEffect(() => {
    if (isAdmin) {
      if (activeTab === 'overview') {
        loadMetrics();
      } else if (activeTab === 'users') {
        loadUsers();
      } else if (activeTab === 'moderation') {
        loadModeration();
      } else if (activeTab === 'analytics') {
        loadAnalytics();
      }
    }
  }, [isAdmin, activeTab, loadMetrics, loadUsers, loadModeration, loadAnalytics]);

  // Handle user suspension toggle
  const toggleSuspension = async (userId: string, isSuspended: boolean, reason?: string) => {
    setActionError(null);
    setActionSuccess(null);
    try {
      await AdminService.toggleUserSuspension(userId, isSuspended, reason);
      setActionSuccess(`User account ${isSuspended ? 'suspended' : 'restored'} successfully.`);
      await loadUsers();
      await loadMetrics();
      setTimeout(() => setActionSuccess(null), 3500);
    } catch (err: any) {
      setActionError(err.message || 'Failed to update user suspension.');
      setTimeout(() => setActionError(null), 4000);
    }
  };

  // Handle role change
  const setUserRole = async (userId: string, role: 'admin' | 'user') => {
    setActionError(null);
    setActionSuccess(null);
    try {
      await AdminService.setUserRole(userId, role);
      setActionSuccess(`User role updated to ${role}.`);
      await loadUsers();
      setTimeout(() => setActionSuccess(null), 3500);
    } catch (err: any) {
      setActionError(err.message || 'Failed to update user role.');
      setTimeout(() => setActionError(null), 4000);
    }
  };

  // Handle moderation visibility toggle
  const toggleContentVisibility = async (projectId: string, isHidden: boolean) => {
    setActionError(null);
    setActionSuccess(null);
    try {
      await AdminService.toggleContentVisibility(projectId, isHidden);
      setActionSuccess(`Project visibility updated (${isHidden ? 'Hidden' : 'Visible'}).`);
      await loadModeration();
      setTimeout(() => setActionSuccess(null), 3500);
    } catch (err: any) {
      setActionError(err.message || 'Failed to toggle content visibility.');
      setTimeout(() => setActionError(null), 4000);
    }
  };

  const refreshAll = async () => {
    await Promise.all([loadMetrics(), loadUsers(), loadModeration(), loadAnalytics()]);
  };

  return {
    user,
    isAdmin,
    isLoadingAuth,
    activeTab,
    setActiveTab,
    metrics,
    isLoadingMetrics,
    loadMetrics,
    users,
    isLoadingUsers,
    userFilters,
    setUserFilters,
    loadUsers,
    moderationItems,
    isLoadingModeration,
    loadModeration,
    analytics,
    isLoadingAnalytics,
    loadAnalytics,
    toggleSuspension,
    setUserRole,
    toggleContentVisibility,
    refreshAll,
    actionError,
    actionSuccess,
  };
};
