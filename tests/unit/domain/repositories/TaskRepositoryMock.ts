import { Task } from "../../../../src/domain/entities";
import TaskRepository from "../../../../src/domain/repositories/TaskRepository";

class TaskRepositoryMock implements TaskRepository {
  private taskMock: Task[] = [];

  public async saveTask(
    id: string,
    name_task: string,
    schedule_time_hour: number,
    schedule_time_minute: number,
    schedule_days: string[]
  ): Promise<Task> {
    const task = new Task(
      id,
      name_task,
      schedule_time_hour,
      schedule_time_minute,
      schedule_days
    );

    this.taskMock.push(task);

    return task;
  }

  public async findTaskById(id: string): Promise<Task | undefined> {
    const task = this.taskMock.find((value) => value.id === id);

    return task;
  }
}

export default TaskRepositoryMock;
