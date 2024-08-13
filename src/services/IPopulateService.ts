import { Country } from "../entities/Country";

export interface IPopulateService {
  getCountriesInfo(): Promise<Country[]>
}