import { CreateTask } from "@/domain/usecases";
import { Controller, HttpResponse, ok, serverError } from "../contracts";

export class CreateTaskController implements Controller {
  constructor(private readonly createTask: CreateTask) {}

  async handle(request: CreateTaskController.Request): Promise<HttpResponse> {
    try {
      const task = await this.createTask.execute(request);
      return ok(task);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateTaskController {
  export type Request = {
    id: string;
    name_task: string;
    schedule_time_hour: number;
    schedule_time_minute: number;
    schedule_days: string[];
  };
}
