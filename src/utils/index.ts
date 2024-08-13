import fs from 'fs';
import { parse } from 'csv-parse';
import { Country } from '../entities/Country';

export function readCsvFile(path): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(path)
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on("data", function(row) {
      rows.push(row);
    }).on('end', function() {
      resolve(rows);
    })
    .on('error', function(err) { reject(err) });
  });
}

export async function getCountriesInfo() {
  const rows = await readCsvFile('data.csv');
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