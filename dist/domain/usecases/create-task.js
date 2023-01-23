"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../entities");
class CreateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute({ id, name_task, schedule_time_hour, schedule_time_minute, schedule_days, }) {
        const task = new entities_1.Task(id, name_task, schedule_time_hour, schedule_time_minute, schedule_days);
        await this.taskRepository.saveTask(task.id, task.name_task, task.schedule_time_hour, task.schedule_time_minute, task.schedule_days);
        return task;
    }
}
exports.default = CreateTask;
