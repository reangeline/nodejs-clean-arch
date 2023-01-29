import { CreateTaskController } from "@/presentation/controller";
import { Controller } from "@/presentation/contracts";
import { makeCreateTask } from "../usecases/create-task-factory";
import { makeCreateTaskValidation } from "./create-task-validation-factory";

export const makeCreateTaskController = (): Controller => {
  return new CreateTaskController(makeCreateTask(), makeCreateTaskValidation());
};
