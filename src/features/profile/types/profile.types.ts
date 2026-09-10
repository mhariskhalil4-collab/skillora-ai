export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  imageUrl?: string;
  isPublic: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeType: '3d-gold' | '3d-silver' | 'standard';
  certificateUrl: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  headline: string;
  bio: string;
  skills: string[];
  projects: Project[];
  certificates: Certificate[];
  resumeUrl?: string;
}
