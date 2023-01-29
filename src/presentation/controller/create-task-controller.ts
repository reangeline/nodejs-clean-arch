import { CreateTask } from "@/domain/usecases";
import {
  badRequest,
  Controller,
  HttpResponse,
  ok,
  serverError,
  Validation,
} from "../contracts";

export class CreateTaskController implements Controller {
  constructor(
    private readonly createTask: CreateTask,
    private readonly validation: Validation
  ) {}

  async handle(request: CreateTaskController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }

      try {
        const task = await this.createTask.execute(request);
        return ok(task);
      } catch (error) {
        return badRequest(error);
      }
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateTaskController {
  export type Request = {
    name_task: string;
    schedule_time_hour: number;
    schedule_time_minute: number;
    schedule_days: string[];
  };
}
