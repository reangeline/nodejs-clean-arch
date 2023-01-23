"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, name_task, schedule_time_hour, schedule_time_minute, schedule_days) {
        this.id = id;
        this.name_task = name_task;
        this.schedule_time_hour = schedule_time_hour;
        this.schedule_time_minute = schedule_time_minute;
        this.schedule_days = schedule_days;
        this.isDateValid(schedule_days);
    }
    isDateValid(schedule_days) {
        schedule_days.forEach((days) => {
            if (days !== "monday" &&
                days !== "tuesday" &&
                days !== "wednesday" &&
                days !== "thursday" &&
                days !== "friday" &&
                days !== "saturday" &&
                days !== "sunday") {
                throw new Error("Add a valid day");
            }
        });
    }
}
exports.Task = Task;
