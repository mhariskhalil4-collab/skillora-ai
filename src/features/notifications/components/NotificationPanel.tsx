import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationItem, NotificationType } from '../types/notification.types';
import {
  CheckCircleIcon,
  SparklesIcon,
  AcademicCapIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  TrashIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface NotificationPanelProps {
  notifications: NotificationItem[];
  unreadCount: number;
  isLoading: boolean;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onDelete: (id: string) => void;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'milestone':
      return <SparklesIcon className="w-4 h-4 text-brand" />;
    case 'certificate':
      return <AcademicCapIcon className="w-4 h-4 text-emerald-400" />;
    case 'subscription':
      return <CreditCardIcon className="w-4 h-4 text-purple-400" />;
    case 'security':
      return <ShieldCheckIcon className="w-4 h-4 text-blue-400" />;
    case 'warning':
      return <ExclamationTriangleIcon className="w-4 h-4 text-amber-400" />;
    case 'success':
      return <CheckCircleIcon className="w-4 h-4 text-emerald-400" />;
    default:
      return <InformationCircleIcon className="w-4 h-4 text-[color:var(--text-secondary)]" />;
  }
};

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  notifications,
  unreadCount,
  isLoading,
  onClose,
  onMarkAsRead,
  onMarkAllAsRead,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleNotificationClick = (notif: NotificationItem) => {
    if (!notif.isRead) {
      onMarkAsRead(notif.id);
    }
    if (notif.actionUrl) {
      onClose();
      navigate(notif.actionUrl);
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-border bg-[color:var(--color-bg-card)] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-[color:var(--color-bg-base)]/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-heading font-bold text-[color:var(--text-primary)]">
            Notifications
          </h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-brand/15 text-brand text-[10px] font-mono font-bold">
              {unreadCount} new
            </span>
          )}
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={onMarkAllAsRead}
            className="text-xs font-heading font-medium text-brand hover:text-brand-light transition-colors cursor-pointer flex items-center gap-1"
          >
            <CheckIcon className="w-3.5 h-3.5" /> Mark all read
          </button>
        )}
      </div>

      {/* Notification List */}
      <div className="max-h-96 overflow-y-auto divide-y divide-border">
        {isLoading ? (
          <div className="p-8 text-center text-xs text-[color:var(--text-secondary)] font-mono">
            Loading notifications...
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <p className="text-sm font-heading font-medium text-[color:var(--text-primary)]">
              All caught up!
            </p>
            <p className="text-xs text-[color:var(--text-secondary)] mt-1">
              You'll be notified here when you achieve milestones or certificates.
            </p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleNotificationClick(notif)}
              className={cn(
                'p-4 flex items-start gap-3 transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 relative group',
                !notif.isRead && 'bg-brand/5'
              )}
            >
              {/* Type Icon */}
              <div className="p-2 rounded-xl bg-[color:var(--color-bg-base)] border border-border flex-shrink-0 mt-0.5">
                {getNotificationIcon(notif.type)}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-heading font-bold text-[color:var(--text-primary)] truncate">
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-[color:var(--text-secondary)] font-mono flex-shrink-0">
                    {formatTimestamp(notif.createdAt)}
                  </span>
                </div>
                <p className="text-xs text-[color:var(--text-secondary)] mt-0.5 line-clamp-2">
                  {notif.message}
                </p>
              </div>

              {/* Unread indicator */}
              {!notif.isRead && (
                <span className="w-2 h-2 rounded-full bg-brand absolute right-3 top-4" />
              )}

              {/* Delete button on hover */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(notif.id);
                }}
                className="opacity-0 group-hover:opacity-100 absolute right-2 bottom-2 p-1 text-[color:var(--text-secondary)] hover:text-red-500 rounded transition-opacity"
                title="Delete notification"
              >
                <TrashIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
