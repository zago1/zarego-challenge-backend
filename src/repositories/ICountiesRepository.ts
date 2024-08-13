import { Country } from "../entities/Country";
import { IPaginatedResponse } from "./IPaginatedResponse";

export interface ICountiesRepository {
  getRows(): Promise<number>;
  findAll(skip: number, take: number): Promise<IPaginatedResponse<Country[]>>;
  insert(country: Country): Promise<Country>;
}