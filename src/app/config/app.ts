import express, { Express } from "express";
import setupRoutes from "./routes";
import setupStaticFiles from "./static-files";

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use(express.json());

  setupStaticFiles(app);
  setupRoutes(app);

  return app;
};
