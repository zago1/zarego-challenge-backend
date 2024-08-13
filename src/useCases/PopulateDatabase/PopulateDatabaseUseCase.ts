import { Country } from "../../entities/Country";
import { ICountiesRepository } from "../../repositories/ICountiesRepository";
import { IPopulateService } from "../../services/IPopulateService";

export class PopulateDatabaseUseCase {

  constructor(
    private countriesRepository: ICountiesRepository,
    private populateService: IPopulateService
  ) {}

  async execute() {
    const rows = await this.countriesRepository.getRows();

    if (rows > 0) { 
      console.log('[DATABASE ALREADY POPULATED]');
      return;
    }

    const countries: Country[] = await this.populateService.getCountriesInfo();

    for await (const country of countries) {
      await this.countriesRepository.insert(country);
    }
  }
}