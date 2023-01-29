import { CreateTask } from "../../../../src/domain/usecases/create-task";
import TaskRepositoryMock from "../repositories/TaskRepositoryMock";

type SutOutput = {
  sut: CreateTask;
  taskRepository: TaskRepositoryMock;
};

const makeSut = (): SutOutput => {
  const taskRepository = new TaskRepositoryMock();
  const sut = new CreateTask(taskRepository);

  return {
    sut,
    taskRepository,
  };
};

describe("Create Task", () => {
  it("should create task", async () => {
    const { sut } = makeSut();

    const task = await sut.execute({
      id: "1",
      name_task: "teste",
      schedule_time_hour: 1,
      schedule_time_minute: 1,
      schedule_days: ["monday"],
    });

    expect(task.id).toBe("1");
  });

  it("should return error if insert same id", async () => {
    const { sut } = makeSut();

    await sut.execute({
      id: "1",
      name_task: "teste",
      schedule_time_hour: 1,
      schedule_time_minute: 1,
      schedule_days: ["monday"],
    });

    expect(
      sut.execute({
        id: "1",
        name_task: "teste",
        schedule_time_hour: 1,
        schedule_time_minute: 1,
        schedule_days: ["monday"],
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
