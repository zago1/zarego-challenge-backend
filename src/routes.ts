import { Request, Response, Router } from "express";
import { populateDatabaseController } from "./useCases/PopulateDatabase";
import { getCountryInformationController } from "./useCases/GetCountryInformation";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return getCountryInformationController.handle(request, response);
});

populateDatabaseController.handle();

export { router };