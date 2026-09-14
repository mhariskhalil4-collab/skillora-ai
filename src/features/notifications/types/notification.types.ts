export type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'milestone'
  | 'certificate'
  | 'subscription'
  | 'security'
  | 'system';

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  actionUrl?: string;
  createdAt: Date;
}
