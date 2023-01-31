import { Task } from "@/domain/entities";
import { TaskRepositoryInterface } from "@/domain/repositories";

class TaskRepositoryMock implements TaskRepositoryInterface {
  private taskMock: Task[] = [];

  public async saveTask({
    name_task,
    schedule_time_hour,
    schedule_time_minute,
    schedule_days,
  }): Promise<Task> {
    const task = new Task(
      name_task,
      schedule_time_hour,
      schedule_time_minute,
      schedule_days
    );

    this.taskMock.push(task);

    return task;
  }

  public async findTaskById({ _id }): Promise<Task | undefined> {
    const task = this.taskMock.find((value) => value._id === _id);

    return task;
  }
}

export default TaskRepositoryMock;
