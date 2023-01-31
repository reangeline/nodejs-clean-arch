import { Task } from "@/domain/entities";

describe("Task", () => {
  it("should create a new task", async function () {
    const task = new Task("teste 1", 1, 0, ["monday"]);

    expect(task).toEqual({
      _id: task._id,
      name_task: "teste 1",
      schedule_time_hour: 1,
      schedule_time_minute: 0,
      schedule_days: ["monday"],
    });

    expect(task).toHaveProperty("_id");
  });

  it("should create a new task without valid day", async function () {
    const task = new Task("teste 1", 1, 0, ["xxx"]);
    const isValid = task.isDateValid(task.schedule_days);
    expect(isValid).toEqual(false);
  });
});
