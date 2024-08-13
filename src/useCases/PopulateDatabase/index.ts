
import { prismaClient } from "../../prisma";
import { PostgresCountriesRepository } from "../../repositories/implementations/PostgresCountriesRepository";
import { CsvPopulateService } from "../../services/implementations/CsvPopulateService";
import { readCsvFile } from "../../utils";
import { PopulateDatabaseController } from "./PopulateDatabaseController";
import { PopulateDatabaseUseCase } from "./PopulateDatabaseUseCase";

const postgresCountriesRepository = new PostgresCountriesRepository(
  prismaClient
);
const csvPopulateService = new CsvPopulateService(readCsvFile);

const populateDatabaseUseCase = new PopulateDatabaseUseCase(
  postgresCountriesRepository,
  csvPopulateService
);
const populateDatabaseController = new PopulateDatabaseController(
  populateDatabaseUseCase
);

export { populateDatabaseUseCase, populateDatabaseController };
