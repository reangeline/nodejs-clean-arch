import { Task } from "../../../../src/domain/entities";
import { TaskRepository } from "../../../../src/domain/repositories/TaskRepository";

class TaskRepositoryMock implements TaskRepository {
  private taskMock: Task[] = [];

  public async saveTask({
    id,
    name_task,
    schedule_time_hour,
    schedule_time_minute,
    schedule_days,
  }): Promise<Task> {
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

  public async findTaskById({ id }): Promise<Task | undefined> {
    const task = this.taskMock.find((value) => value.id === id);

    return task;
  }
}

export default TaskRepositoryMock;
