import { Request, Response } from "express";
import { GetCountryInformationUseCase } from "./GetCountryInformationUseCase";

export class GetCountryInformationController {
  constructor(
    private getCountryInformationUseCase: GetCountryInformationUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const page = request.query.page 
        ? parseInt(request.query.page as string)
        : 1;

      const pageSize = request.query.pageSize 
        ? parseInt(request.query.pageSize as string)
        : 20;
      
      const data = await this.getCountryInformationUseCase.execute(page, pageSize);

      return response.status(200).send(data);
    } catch (err) {
      console.log('[err]', err);
      response.sendStatus(500);
    }
  }
}