import { CreateTaskController } from "@/presentation/controller";
// import {} from '@/presentation/contracts'

const mockRequest = (): CreateTaskController.Request => ({
  id: "1",
  name_task: "teste",
  schedule_time_hour: 1,
  schedule_time_minute: 1,
  schedule_days: ["monday"],
});
