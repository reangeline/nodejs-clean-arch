import { TaskInput, TaskOutput } from "@/presentation/dtos";
import { Task } from "../entities";
import { TaskRepositoryInterface } from "@/domain/repositories/task-repository-interface";

export class CreateTask {
  private taskRepository: TaskRepositoryInterface;
  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute({
    name_task,
    schedule_time_hour,
    schedule_time_minute,
    schedule_days,
  }: TaskInput): Promise<TaskOutput> {
    const newTask = new Task(
      name_task,
      schedule_time_hour,
      schedule_time_minute,
      schedule_days
    );

    if (!newTask.isDateValid(schedule_days)) throw new Error("Add a valid day");

    const isExist = await this.taskRepository.findTaskById({
      _id: newTask._id,
    });
    if (isExist) throw new Error("this id already exist");

    const taskSaved = await this.taskRepository.saveTask({
      _id: newTask._id,
      name_task: newTask.name_task,
      schedule_time_hour: newTask.schedule_time_hour,
      schedule_time_minute: newTask.schedule_time_minute,
      schedule_days: newTask.schedule_days,
    });

    return taskSaved;
  }
}
