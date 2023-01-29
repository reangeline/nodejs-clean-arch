import { Express } from "express";
import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";

export default (app: Express): void => {
  app.use(cors);
  app.use(contentType);
};
