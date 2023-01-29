import { TaskRepositoryInterface } from "@/domain/repositories/task-repository-interface";
import { MongoHelper } from "./mongo-helper";

import { Collection, ObjectId } from "mongodb";
import { Task } from "../entities/task";

export class TaskRepository implements TaskRepositoryInterface {
  private mongoRepository: Collection<Task>;
  constructor() {
    this.mongoRepository = MongoHelper.getCollection("tasks");
  }

  public async saveTask(input: {
    _id: ObjectId;
    name_task: string;
    schedule_time_hour: number;
    schedule_time_minute: number;
    schedule_days: string[];
  }): Promise<Task> {
    const { insertedId } = await this.mongoRepository.insertOne({
      _id: input._id,
      name_task: input.name_task,
      schedule_time_hour: input.schedule_time_hour,
      schedule_time_minute: input.schedule_time_minute,
      schedule_days: input.schedule_days,
    });

    if (insertedId === null) {
      throw new Error("It is not possible create task");
    }

    return {
      _id: insertedId,
      name_task: input.name_task,
      schedule_time_hour: input.schedule_time_hour,
      schedule_time_minute: input.schedule_time_minute,
      schedule_days: input.schedule_days,
    };
  }

  async findTaskById(id: { _id: ObjectId }): Promise<Task> {
    return await this.mongoRepository.findOne({ _id: id._id });
  }
}
