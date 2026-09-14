export interface AdminOverviewMetrics {
  totalUsers: number;
  proUsers: number;
  freeUsers: number;
  totalRoadmaps: number;
  completedRoadmaps: number;
  totalCertificates: number;
  totalProjects: number;
  totalStudyBuddyMessages: number;
  estimatedMrr: number;
}

export interface AdminUserRecord {
  id: string;
  email?: string;
  fullName: string;
  avatarUrl?: string;
  plan: 'free' | 'pro';
  role: 'admin' | 'user';
  isSuspended: boolean;
  suspendedReason?: string;
  createdAt: string;
  lastSignInAt?: string;
  completedRoadmapsCount: number;
  certificatesCount: number;
}

export interface AdminModerationItem {
  id: string;
  type: 'project' | 'portfolio' | 'public_deliverable';
  title: string;
  authorName: string;
  authorEmail?: string;
  authorId: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  isHidden: boolean;
  createdAt: string;
  tags?: string[];
}

export interface SkillPopularity {
  name: string;
  count: number;
}

export interface RoadmapStats {
  title: string;
  enrolledCount: number;
  completionRate: number;
}

export interface AdminAnalyticsData {
  topSkills: SkillPopularity[];
  popularRoadmaps: RoadmapStats[];
  userGrowth: { date: string; users: number }[];
}

export interface UserFilterOptions {
  searchQuery?: string;
  planFilter?: 'all' | 'free' | 'pro';
  statusFilter?: 'all' | 'active' | 'suspended';
  roleFilter?: 'all' | 'admin' | 'user';
}
