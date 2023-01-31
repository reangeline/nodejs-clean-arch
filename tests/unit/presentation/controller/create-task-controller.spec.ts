import { CreateTask } from "@/domain/usecases";
import { CreateTaskController } from "@/presentation/controller";
import TaskRepositoryMock from "@/tests/unit/domain/mocks/TaskRepositoryMock";
import { ValidationSpy } from "@/tests/unit/presentation/mocks";

const mockRequest = (): CreateTaskController.Request => ({
  name_task: "teste",
  schedule_time_hour: 1,
  schedule_time_minute: 1,
  schedule_days: ["monday"],
});

type SutTypes = {
  sut: CreateTaskController;
  createTask: CreateTask;
  taskRepository: TaskRepositoryMock;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const taskRepository = new TaskRepositoryMock();
  const createTask = new CreateTask(taskRepository);
  const validationSpy = new ValidationSpy();

  const sut = new CreateTaskController(createTask, validationSpy);

  return {
    taskRepository,
    createTask,
    validationSpy,
    sut,
  };
};

describe("Create task controller", () => {
  it("should received status 200", async () => {
    const { sut } = makeSut();
    const request = mockRequest();

    const { statusCode } = await sut.handle(request);

    expect(statusCode).toBe(200);
  });

  it("should return error if the fields is missing", async () => {
    const { sut, validationSpy } = makeSut();
    const request = mockRequest();

    await sut.handle(request);
    expect(validationSpy.input).toEqual(request);
  });
});
