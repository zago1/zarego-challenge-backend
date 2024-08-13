import { prismaClient } from "../../prisma";
import { PostgresCountriesRepository } from "../../repositories/implementations/PostgresCountriesRepository";
import { GetCountryInformationController } from "./GetCountryInformationController";
import { GetCountryInformationUseCase } from "./GetCountryInformationUseCase";

const postgresCountriesRepository = new PostgresCountriesRepository(
  prismaClient
);

const getCountryInformationUseCase = new GetCountryInformationUseCase(
  postgresCountriesRepository
);
const getCountryInformationController = new GetCountryInformationController(
  getCountryInformationUseCase
)

export { getCountryInformationUseCase, getCountryInformationController };