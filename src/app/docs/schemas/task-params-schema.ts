export const taskParamsSchema = {
  type: "object",
  properties: {
    name_task: {
      type: "string",
    },
    schedule_time_hour: {
      type: "number",
    },
    schedule_time_minute: {
      type: "number",
    },
    schedule_days: {
      type: "string[]",
    },
  },
  required: [
    "name_task",
    "schedule_time_hour",
    "schedule_time_minute",
    "schedule_days",
  ],
};
