export interface PublicPortfolioData {
  userId: string;
  slug: string;
  isPublished: boolean;
  theme?: string;
  profile: {
    id: string;
    fullName: string;
    headline?: string;
    bio?: string;
    skills: string[];
    avatarUrl?: string;
    resumeUrl?: string;
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    url?: string;
    imageUrl?: string;
    createdAt?: string;
  }>;
  certificates: Array<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    badgeType: 'standard' | '3d-gold' | '3d-silver';
    certificateUrl?: string;
  }>;
  progress: {
    xpTotal: number;
    streakCount: number;
  };
  completedRoadmapsCount: number;
}

export interface PortfolioSettings {
  userId: string;
  slug: string;
  isPublished: boolean;
  theme?: string;
}
