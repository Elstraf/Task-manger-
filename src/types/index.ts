export interface TaskType {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TaskIdType = Pick<TaskType, "id">;
