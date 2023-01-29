import { TaskOutput } from "@/presentation/dtos";
import { ObjectId } from "mongodb";

export interface TaskRepositoryInterface {
  saveTask(input: {
    _id: ObjectId;
    name_task: string;
    schedule_time_hour: number;
    schedule_time_minute: number;
    schedule_days: string[];
  }): Promise<TaskOutput>;

  findTaskById(id: { _id: ObjectId }): Promise<TaskOutput | undefined>;
}
