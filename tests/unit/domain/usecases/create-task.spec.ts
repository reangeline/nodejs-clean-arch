import { CreateTask } from "../../../../src/domain/usecases/create-task";
import TaskRepositoryMock from "../repositories/TaskRepositoryMock";

let createTask: CreateTask;
let taskRepositoryMock: TaskRepositoryMock;

describe("Create Task", () => {
  beforeEach(() => {
    taskRepositoryMock = new TaskRepositoryMock();
    createTask = new CreateTask(taskRepositoryMock);
  });

  it("should create task", async () => {
    const task = await createTask.execute({
      id: "1",
      name_task: "teste",
      schedule_time_hour: 1,
      schedule_time_minute: 1,
      schedule_days: ["monday"],
    });

    expect(task.id).toBe("1");
  });

  it("should return error if insert same id", async () => {
    await createTask.execute({
      id: "1",
      name_task: "teste",
      schedule_time_hour: 1,
      schedule_time_minute: 1,
      schedule_days: ["monday"],
    });

    expect(
      createTask.execute({
        id: "1",
        name_task: "teste",
        schedule_time_hour: 1,
        schedule_time_minute: 1,
        schedule_days: ["monday"],
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
