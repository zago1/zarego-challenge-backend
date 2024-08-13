import { CsvPopulateService } from "."
import { Country } from "../../../entities/Country";

describe('getCountriesInfo function', () => {
  it('should return an array os Countries', async () => {
    const mockFunction = async (path: string) => {
      const line = [
        '2','England',
        '6.38','2.55','4.91','4.90',
        '5.33','6.00','5.40','2.54',
        '6.21','4.91','6.12','3.54',
        '5.35','1.94','3.92','3.70',
        '6.39','1.74','6.16','3.42',
        '5.68','6.01','5.71','3.04',
        '5.57','4.90','3.92','Anglo'
      ];

      return [line]
    }
    const populateService = new CsvPopulateService(mockFunction);

    const contries: Country[] = await populateService.getCountriesInfo();

    expect(contries.every(c => c instanceof Country)).toBeTruthy();
  })
})