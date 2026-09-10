// Global TypeScript definitions
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'in_progress' | 'completed';
}
