export type ResourceType = 'tutorial' | 'video' | 'ebook' | 'tool';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type CostType = 'free' | 'paid' | 'freemium';

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
  topics: string[];
  difficulty: DifficultyLevel;
  cost: CostType;
  lastVerified: string;
  description?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  parentTopic?: string;
  subtopics?: string[];
}

export interface SearchFilters {
  query: string;
  topics: string[];
  difficulty?: DifficultyLevel;
  type?: ResourceType;
  cost?: CostType;
}
