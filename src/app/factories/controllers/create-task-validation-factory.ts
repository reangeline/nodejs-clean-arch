import {
  ValidationComposite,
  RequiredFieldValidation,
} from "@/validation/validators";
import { Validation } from "@/presentation/contracts";

export const makeCreateTaskValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of [
    "name_task",
    "schedule_time_hour",
    "schedule_time_minute",
    "schedule_days",
  ]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
