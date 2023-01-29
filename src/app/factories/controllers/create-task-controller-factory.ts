import { CreateTaskController } from "@/presentation/controller";
import { Controller } from "@/presentation/contracts";
import { makeCreateTask } from "../usecases/create-task-factory";

export const makeCreateTaskController = (): Controller => {
  return new CreateTaskController(makeCreateTask());
};
