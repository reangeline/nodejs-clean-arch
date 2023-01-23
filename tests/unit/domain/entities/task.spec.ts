import { Task } from "../../../../src/domain/entities/index";

describe("Task", () => {
  let task: Task;
  task = new Task("1", "teste 1", 1, 0, ["monday"]);

  it("should create a new task", async function () {
    expect(task).toEqual({
      id: "1",
      name_task: "teste 1",
      schedule_time_hour: 1,
      schedule_time_minute: 0,
      schedule_days: ["monday"],
    });
  });

  it("should create a new task without valid day", async function () {
    expect(() => new Task("1", "teste 1", 1, 0, [""])).toThrow(
      "Add a valid day"
    );

    expect(() => new Task("1", "teste 1", 1, 0, ["xxx"])).toThrow(Error);
  });
});
