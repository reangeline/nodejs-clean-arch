import { adaptRoute } from "@/app/adapters";
import { makeCreateTaskController } from "@/app/factories";

import { Router } from "express";

export default (router: Router): void => {
  router.post("/task", adaptRoute(makeCreateTaskController()));
};
