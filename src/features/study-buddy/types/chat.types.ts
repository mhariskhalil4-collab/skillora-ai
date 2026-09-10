export type ChatRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: Date;
  taskId?: string;
}

export interface ChatContext {
  roadmapId?: string;
  taskId?: string;
  taskTitle?: string;
  taskDescription?: string;
  userGoal?: string;
  skillLevel?: string;
}
