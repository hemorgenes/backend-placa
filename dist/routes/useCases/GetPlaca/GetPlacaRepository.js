"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlacaRepository = void 0;
const axios_1 = __importDefault(require("axios"));
class GetPlacaRepository {
    execute({ placa }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Faça a chamada para a API usando o axios
                const response = yield axios_1.default.get(`https://wdapi2.com.br/consulta/${placa}/3d8a40d0381061ae900e4a6212b508a5`);
                return response.data;
            }
            catch (error) {
                console.error("Erro na chamada para a API:", error);
                throw new Error(error);
            }
        });
    }
}
exports.GetPlacaRepository = GetPlacaRepository;
