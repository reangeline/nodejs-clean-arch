import { CreateTask } from "@/domain/usecases";
import { TaskRepository } from "@/infra/db/mongodb/task-repository";

export const makeCreateTask = (): CreateTask => {
  const taskRepository = new TaskRepository();
  return new CreateTask(taskRepository);
};
