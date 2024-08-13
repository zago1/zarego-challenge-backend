import { ICountiesRepository } from '../../ICountiesRepository';
import { PostgresCountriesRepository } from '.';
import { PrismaMock } from '../../../prisma/prisma-mock' 
import { mockReset } from 'jest-mock-extended';

describe('PostgresCountriesRepository', () => {
  let countriesRepository: ICountiesRepository;
  
  beforeEach(() => {
    mockReset(PrismaMock);
    countriesRepository = new PostgresCountriesRepository(PrismaMock);
  });

  it('should getRows return number', async () => {
    PrismaMock.countries.count.mockResolvedValue(0);

    const result = await countriesRepository.getRows();

    expect(result).toEqual(0);
  })
});
