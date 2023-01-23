import CreateTaskDto from "@/dtos/CreateTaskDTO";
import { Task } from "../entities";
import TaskRepository from "@/domain/repositories/TaskRepository";

export class CreateTask {
  private taskRepository: TaskRepository;
  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute({
    id,
    name_task,
    schedule_time_hour,
    schedule_time_minute,
    schedule_days,
  }: CreateTaskDto): Promise<Task> {
    const newTask = new Task(
      id,
      name_task,
      schedule_time_hour,
      schedule_time_minute,
      schedule_days
    );

    const isExist = await this.taskRepository.findTaskById(newTask.id);

    if (isExist) {
      throw new Error("this id already exist");
    }

    const taskSaved = await this.taskRepository.saveTask(
      newTask.id,
      newTask.name_task,
      newTask.schedule_time_hour,
      newTask.schedule_time_minute,
      newTask.schedule_days
    );

    return taskSaved;
  }
}
