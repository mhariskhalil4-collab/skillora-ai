export type TaskStatus = 'locked' | 'in_progress' | 'completed';
export type ResourceType = 'video' | 'article' | 'documentation' | 'interactive';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  duration?: string;
}

export interface CodeExplanationLine {
  line: string;
  explanation: string;
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
  explanation?: string;
  lineByLine?: CodeExplanationLine[];
}

export interface MiniPractice {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonSection {
  id: string;
  title: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  analogy?: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  miniPractice?: MiniPractice;
  proTip?: string;
}

export interface LessonContent {
  overview: string;
  analogyHero?: string;
  objectives: string[];
  estimatedTime: string;
  sections: LessonSection[];
  keyTakeaways: string[];
  summary: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Task {
  id: string;
  orderIndex: number;
  title: string;
  description: string;
  status: TaskStatus;
  resources: Resource[];
  requiresQuiz: boolean;
  xpReward: number;
  lessonContent?: LessonContent;
  questions?: QuizQuestion[];
}

export interface Roadmap {
  id: string;
  title: string;
  progressPercentage: number;
  tasks: Task[];
}
