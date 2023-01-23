export class Task {
  id: string;
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];

  constructor(
    id: string,
    name_task: string,
    schedule_time_hour: number,
    schedule_time_minute: number,
    schedule_days: string[]
  ) {
    this.id = id;
    this.name_task = name_task;
    this.schedule_time_hour = schedule_time_hour;
    this.schedule_time_minute = schedule_time_minute;
    this.schedule_days = schedule_days;

    this.isDateValid(schedule_days);
  }

  isDateValid(schedule_days: string[]) {
    schedule_days.forEach((days) => {
      if (
        days !== "monday" &&
        days !== "tuesday" &&
        days !== "wednesday" &&
        days !== "thursday" &&
        days !== "friday" &&
        days !== "saturday" &&
        days !== "sunday"
      ) {
        throw new Error("Add a valid day");
      }
    });
  }
}
