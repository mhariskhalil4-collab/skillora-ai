export type ChatRole = 'user' | 'assistant' | 'system';

export type StudyBuddyErrorCode =
  | 'AI_CONFIG_ERROR'
  | 'AI_AUTH_ERROR'
  | 'AI_RATE_LIMIT'
  | 'AI_TIMEOUT'
  | 'AI_NETWORK_ERROR'
  | 'AI_UNAVAILABLE'
  | 'INVALID_REQUEST'
  | 'UNKNOWN_ERROR';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: Date;
  taskId?: string;
  roadmapId?: string;
  courseId?: string;
  isError?: boolean;
}

export interface ChatContext {
  roadmapId?: string;
  courseId?: string;
  courseTitle?: string;
  taskId?: string;
  taskTitle?: string;
  taskDescription?: string;
  userGoal?: string;
  skillLevel?: string;
}

export interface StudyBuddyApiResponse {
  success: boolean;
  reply?: string;
  errorCode?: StudyBuddyErrorCode;
  message?: string;
  isRetryable?: boolean;
  provider?: string;
  model?: string;
  taskId?: string | null;
  durationMs?: number;
}

export interface StudyBuddyHealthStatus {
  status: 'healthy' | 'degraded' | 'misconfigured';
  reachable: boolean;
  hasGeminiKey: boolean;
  hasOpenAiKey: boolean;
  activeProvider: string;
  model: string;
  lastChecked: string;
  message: string;
}

