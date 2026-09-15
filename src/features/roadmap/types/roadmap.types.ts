export type TaskStatus = 'locked' | 'in_progress' | 'completed';
export type ResourceType = 'video' | 'article' | 'documentation' | 'interactive';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type LevelStatus = 'locked' | 'in_progress' | 'completed';

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
  title?: string;
  code: string;
  explanation?: string;
  lineByLine?: CodeExplanationLine[];
  lineByLineBreakdown?: string[];
}

export interface MiniPractice {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonSection {
  id?: string;
  title: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  analogy?: string;
  content?: string;
  explanation?: string;
  codeSnippets?: CodeSnippet[];
  miniPractice?: MiniPractice;
  proTip?: string;
  commonMistakes?: string[];
}

export interface PracticeExercise {
  title: string;
  instructions: string | string[];
  starterCode?: string;
  solutionCode?: string;
  id?: string;
  description?: string;
  hints?: string[];
  validationChecklist?: string[];
}

export interface LessonContent {
  overview: string;
  analogyHero?: string;
  objectives: string[];
  estimatedTime?: string;
  sections: LessonSection[];
  keyTakeaways: string[];
  summary?: string;
  syntaxGuide?: string;
  practiceExercises?: PracticeExercise[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  topic?: string;
}

export interface AssessmentWeakArea {
  topic: string;
  missedCount: number;
  totalInTopic: number;
  explanation: string;
  recommendedModuleIndex?: number;
}

export interface Task {
  id: string;
  orderIndex: number;
  title: string;
  description: string;
  status?: TaskStatus;
  isCompleted?: boolean;
  duration?: string;
  resources?: Resource[];
  requiresQuiz?: boolean;
  xpReward?: number;
  lessonContent?: LessonContent;
  questions?: QuizQuestion[];
  passingScore?: number; // Minimum correct answers required (e.g. 15 for 20 MCQs)
  totalQuestions?: number;
  isFinalAssessment?: boolean;
  isProject?: boolean;
  projectDetails?: any;
  assessmentDetails?: any;
  type?: string;
  level?: CourseLevel;
  tags?: string[];
}

export interface LevelProgress {
  level: CourseLevel;
  title: string;
  status: LevelStatus;
  progressPercentage: number;
  completedTasks: number;
  totalTasks: number;
  assessmentPassed: boolean;
  assessmentScore?: number;
  requiredScore: number;
  totalQuestions: number;
  tasks: Task[];
}

export interface CourseProgressState {
  courseId: string;
  courseTitle: string;
  currentLevel: CourseLevel;
  levels: Record<CourseLevel, LevelProgress>;
  overallProgress: number;
}

export interface Roadmap {
  id: string;
  userId?: string;
  title: string;
  goal?: string;
  description?: string;
  courseId?: string;
  courseRoute?: string;
  progressPercentage: number;
  status?: 'draft' | 'in_progress' | 'completed' | 'archived';
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tasks: Task[];
  totalTasksCount?: number;
  completedTasksCount?: number;
  currentLevel?: CourseLevel;
  levels?: Record<CourseLevel, LevelProgress>;
}

export interface RoadmapSummary {
  id: string;
  userId?: string;
  title: string;
  goal?: string;
  courseId?: string;
  courseRoute?: string;
  progressPercentage: number;
  status: 'draft' | 'in_progress' | 'completed' | 'archived';
  isActive: boolean;
  totalTasksCount: number;
  completedTasksCount: number;
  createdAt?: string;
  updatedAt?: string;
}

