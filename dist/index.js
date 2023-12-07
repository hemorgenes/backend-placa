"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const AppError_1 = require("./errors/AppError");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((err, req, res) => {
    if (err instanceof AppError_1.AppError) {
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
