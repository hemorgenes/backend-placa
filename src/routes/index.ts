import { Router } from "express";
import { GetPlacaController } from "./useCases/GetPlaca/GetPlacaController";

const routes = Router();

const getPlaca = new GetPlacaController();

routes.get("/:placa", getPlaca.handle);

export { routes };
