export class Country {
  public readonly id: number;

  public country_name: string;
  public performance_oriented: number;
  public autocratic: number;
  public country_cluster: string;
  public charisma: number;
  public decisive: number;
  public modesty: number;
  public date_added: Date;
  
  constructor(props: Omit<Country, 'id'>, id?: number) {
    Object.assign(this, props);

    if (!!id) {
      this.id = id;
    }
  }
}