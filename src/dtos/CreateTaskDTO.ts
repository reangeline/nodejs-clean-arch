export default interface CreateTaskDto {
  id: string;
  name_task: string;
  schedule_time_hour: number;
  schedule_time_minute: number;
  schedule_days: string[];
}
