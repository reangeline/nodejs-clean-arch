import express, { Express } from "express";
import setupRoutes from "./routes";
import setupStaticFiles from "./static-files";
import setupMiddlewares from "./middlewares";
import "express-async-errors";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(express.json());
  setupMiddlewares(app);
  setupStaticFiles(app);
  setupRoutes(app);

  return app;
};
