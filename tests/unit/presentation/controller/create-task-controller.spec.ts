import { CreateTask } from "@/domain/usecases";
import { CreateTaskController } from "@/presentation/controller";
import TaskRepositoryMock from "../../domain/repositories/TaskRepositoryMock";

const mockRequest = (): CreateTaskController.Request => ({
  id: "1",
  name_task: "teste",
  schedule_time_hour: 1,
  schedule_time_minute: 1,
  schedule_days: ["monday"],
});

type SutTypes = {
  sut: CreateTaskController;
  createTask: CreateTask;
  taskRepository: TaskRepositoryMock;
};

const makeSut = (): SutTypes => {
  const taskRepository = new TaskRepositoryMock();
  const createTask = new CreateTask(taskRepository);
  const sut = new CreateTaskController(createTask);

  return {
    taskRepository,
    createTask,
    sut,
  };
};

it("should received status 200", async () => {
  const { sut } = makeSut();
  const request = mockRequest();

  const { statusCode } = await sut.handle(request);

  expect(statusCode).toBe(200);
});
