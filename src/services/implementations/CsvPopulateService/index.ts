import { Country } from "../../../entities/Country";
import { getCountriesInfo, readCsvFile } from "../../../utils";
import { IPopulateService } from "../../IPopulateService";

export class CsvPopulateService implements IPopulateService {

  constructor(
    private getInfoFromCsvFile: (path) => Promise<string[][]>
  ) {}

  async getCountriesInfo() {
    const rows = await this.getInfoFromCsvFile('data.csv');
    const formattedRows: Country[] = [];

    for (const row of rows) {
      const country = new Country({
        country_name: row[1],
        performance_oriented: parseFloat(row[2]),
        autocratic: parseFloat(row[3]),
        modesty: parseFloat(row[4]),
        charisma: parseFloat(row[5]),
        decisive: parseFloat(row[7]),
        country_cluster: row[row.length - 1],
        date_added: new Date(),
      });

      formattedRows.push(country);
    }

    return formattedRows;
  }
}