import { mock, Mock } from "ts-jest-mocker"
import { ICountiesRepository } from "../../repositories/ICountiesRepository"
import { GetCountryInformationUseCase } from "./GetCountryInformationUseCase"

describe('GetCountryInformationUseCase', () => {

  let countriesRepository: Mock<ICountiesRepository>;
  let getCountryInformationUseCase: GetCountryInformationUseCase;

  beforeEach(() => {
    countriesRepository = mock<ICountiesRepository>();
    getCountryInformationUseCase = new GetCountryInformationUseCase(countriesRepository);
  });

  it('should return GetCountryInformationUseCaseResponse', async() => {
    countriesRepository.findAll.mockReturnValueOnce(new Promise((resolve) => {
      resolve({
        metadata: {
          total_registers: 0
        },
        data: [],
      })
    }));

    const response = await getCountryInformationUseCase.execute(1, 20);

    expect(countriesRepository.findAll).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      data: [],
      metadata: {
        total_registers: 0,
        page: 1,
        rows: 20
      }
    });
    // const response = await getCountryInformationUseCase.execute(1, 20);

  })
})