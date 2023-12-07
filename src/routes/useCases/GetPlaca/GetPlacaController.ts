import { Request, Response } from "express";
import { GetPlacaRepository } from "./GetPlacaRepository";

export class GetPlacaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { placa } = req.params;

    const getPlaca = new GetPlacaRepository();

    try {
      const response = await getPlaca.execute({ placa });

      return res.status(201).json(response);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
