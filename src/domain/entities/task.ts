import { ObjectID } from "bson";

export class Task {
  _id: ObjectID;
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];

  constructor(
    name_task: string,
    schedule_time_hour: number,
    schedule_time_minute: number,
    schedule_days: string[]
  ) {
    this._id = new ObjectID();
    this.name_task = name_task;
    this.schedule_time_hour = schedule_time_hour;
    this.schedule_time_minute = schedule_time_minute;
    this.schedule_days = schedule_days;
  }

  isDateValid(schedule_days: string[]): boolean {
    let isValid: boolean = false;
    schedule_days.map((days) => {
      if (
        days === "monday" ||
        days === "tuesday" ||
        days === "wednesday" ||
        days === "thursday" ||
        days === "friday" ||
        days === "saturday" ||
        days === "sunday"
      )
        isValid = true;
    });

    return isValid;
  }
}
