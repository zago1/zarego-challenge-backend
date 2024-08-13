import { PrismaClient } from "@prisma/client";
import { Country } from "../../../entities/Country";
import { ICountiesRepository } from "../../ICountiesRepository";
import { IPaginatedResponse } from "../../IPaginatedResponse";


export class PostgresCountriesRepository implements ICountiesRepository {
  constructor(
    private dbClient: PrismaClient
  ) {}

  async getRows(): Promise<number> {
    const count = await this.dbClient.countries.count();

    return count ?? 0;
  }

  async findAll(skip: number, take: number): Promise<IPaginatedResponse<Country[]>> {
    const data = await this.dbClient.countries.findMany({
      skip,
      take
    });

    const count = await this.getRows();

    return {
      metadata: { 
        total_registers: count 
      },
      data
    };
  }
  async insert(newCountry: Country): Promise<Country> {
    const country = await this.dbClient.countries.create({
      data: newCountry
    });

    return country;
  }
  
}