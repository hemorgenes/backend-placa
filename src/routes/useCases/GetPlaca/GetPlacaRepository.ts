import axios from "axios";

interface GetPlacaRequest {
  placa: string;
}

type CreateUserResponse = string;

export class GetPlacaRepository {
  async execute({ placa }: GetPlacaRequest): Promise<CreateUserResponse> {
    try {
      // Faça a chamada para a API usando o axios
      const response = await axios.get(
        `https://wdapi2.com.br/consulta/${placa}/3d8a40d0381061ae900e4a6212b508a5`
      );

      return response.data;
    } catch (error: any) {
      console.error("Erro na chamada para a API:", error);
      throw new Error(error);
    }
  }
}
