import React, { useRef, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useNotifications } from '../hooks/useNotifications';
import { NotificationPanel } from './NotificationPanel';
import { cn } from '@/utils/cn';

export const NotificationBell: React.FC = () => {
  const {
    notifications,
    unreadCount,
    isLoading,
    isOpen,
    setIsOpen,
    toggleOpen,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={`Notifications (${unreadCount} unread)`}
        className={cn(
          'relative p-2 rounded-full text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer',
          isOpen && 'text-brand bg-brand/10'
        )}
      >
        <BellIcon className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-brand text-white text-[10px] font-mono font-bold leading-none animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <NotificationPanel
          notifications={notifications}
          unreadCount={unreadCount}
          isLoading={isLoading}
          onClose={() => setIsOpen(false)}
          onMarkAsRead={markAsRead}
          onMarkAllAsRead={markAllAsRead}
          onDelete={deleteNotification}
        />
      )}
    </div>
  );
};
