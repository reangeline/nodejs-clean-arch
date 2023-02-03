import { serve, setup } from "swagger-ui-express";
import { Express } from "express";
import { noCache } from "@/app/middlewares";
import swaggerConfig from "@/app/docs";

export default (app: Express): void => {
  app.use("/api-docs", noCache, serve, setup(swaggerConfig));
};
