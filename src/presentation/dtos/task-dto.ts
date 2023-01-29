import { ObjectId } from "mongodb";

export interface TaskInput {
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];
}

export interface TaskOutput {
  _id: ObjectId;
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];
}
