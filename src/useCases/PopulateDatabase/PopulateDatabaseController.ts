import { PopulateDatabaseUseCase } from "./PopulateDatabaseUseCase";

export class PopulateDatabaseController {
  constructor(
    private populateDatabaseUseCase: PopulateDatabaseUseCase
  ) {}

  async handle() {
    await this.populateDatabaseUseCase.execute();
  }
}