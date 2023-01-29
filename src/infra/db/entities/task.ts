import { ObjectID } from "bson";

export interface Task {
  _id: ObjectID;
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];
}
