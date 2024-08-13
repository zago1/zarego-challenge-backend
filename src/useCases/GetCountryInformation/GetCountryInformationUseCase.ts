import { Country } from "../../entities/Country";
import { ICountiesRepository } from "../../repositories/ICountiesRepository";

export interface GetCountryInformationUseCaseResponse<T> {
  metadata: {
    page: number;
    rows: number;
    total_registers: number;
  },
  data: T
}

export class GetCountryInformationUseCase {
  constructor(
    private countriesRepository: ICountiesRepository
  ) {}

  async execute(
    page: number, pageSize: number
  ): Promise<GetCountryInformationUseCaseResponse<Country[]>> {
    const skip = (page - 1) * pageSize;
    const { data, metadata } = await this.countriesRepository.findAll(skip, pageSize);

    return {
      metadata: { 
        ...metadata,
        page,
        rows: data.length 
      },
      data
    }
  }
}