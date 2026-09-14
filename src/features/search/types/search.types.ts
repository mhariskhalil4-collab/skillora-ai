export type SearchCategory =
  | 'all'
  | 'roadmaps'
  | 'lessons'
  | 'skills'
  | 'portfolios'
  | 'certificates';

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: 'roadmap' | 'lesson' | 'skill' | 'portfolio' | 'certificate';
  url: string;
  badge?: string;
}
