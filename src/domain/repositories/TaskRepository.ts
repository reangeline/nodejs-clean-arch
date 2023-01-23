import { Task } from "@/domain/entities";

export default interface TaskRepository {
  saveTask(
    id: string,
    name_task: string,
    schedule_time_hour: number,
    schedule_time_minute: number,
    schedule_days: string[]
  ): Promise<Task>;

  findTaskById(id: string): Promise<Task | undefined>;
}
