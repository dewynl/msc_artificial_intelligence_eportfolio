export type ModuleId = string;

export type ModuleStatus = 'done' | 'in-progress' | 'planned';

export type ModuleCardStatus = 'todo' | 'in progress' | 'done';

export interface WorkExperience {
  title: string;
  company: string;
  employmentTime: string;
  tasks: string[];
}

export interface ModuleData {
  moduleId: ModuleId;
  title: string;
  background: string;
  moduleCoverImage: string;
  status: ModuleStatus;
  content: React.ReactElement;
}

export interface RouteParams extends Record<string, string | undefined> {
  moduleId?: string;
}
