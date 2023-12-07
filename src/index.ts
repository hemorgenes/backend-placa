import "express-async-errors";
import express, { Request, Response } from "express";
import cors from "cors";

import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3001, () => console.log("🚀 Server is running"));
