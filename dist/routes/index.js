"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const GetPlacaController_1 = require("./useCases/GetPlaca/GetPlacaController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const getPlaca = new GetPlacaController_1.GetPlacaController();
routes.get("/:placa", getPlaca.handle);
