import { Task } from "../../../../src/domain/entities/index";

describe("Task", () => {
  let task: Task;
  task = new Task("teste 1", 1, 0, ["monday"]);

  it("should create a new task", async function () {
    expect(task).toEqual({
      name_task: "teste 1",
      schedule_time_hour: 1,
      schedule_time_minute: 0,
      schedule_days: ["monday"],
    });

    expect(task).toHaveProperty("_id");
  });

  it("should create a new task without valid day", async function () {
    expect(() => new Task("teste 1", 1, 0, [""])).toThrow("Add a valid day");

    expect(() => new Task("teste 1", 1, 0, ["xxx"])).toThrow(Error);
  });
});
