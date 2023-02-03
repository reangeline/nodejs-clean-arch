import express, { Express } from "express";
import setupRoutes from "./routes";
import setupStaticFiles from "./static-files";
import setupMiddlewares from "./middlewares";
import setupSwagger from "./swagger";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(express.json());
  setupMiddlewares(app);
  setupSwagger(app);
  setupStaticFiles(app);
  setupRoutes(app);

  return app;
};
