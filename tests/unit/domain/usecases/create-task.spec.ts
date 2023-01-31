import { CreateTask } from "@/domain/usecases";
import TaskRepositoryMock from "@/tests/unit/domain/mocks/TaskRepositoryMock";

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

    await sut.execute({
      name_task: "teste",
      schedule_time_hour: 1,
      schedule_time_minute: 1,
      schedule_days: ["monday"],
    });
  });
});
