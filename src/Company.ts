import { faker } from "@faker-js/faker";
export class Company{
    name: string;
    catchPhrase: string;
    location: {
        lat:number;
        lng:number;
    };
    locationText:string;
    constructor(){
      this.name = faker.company.name();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
        lat: faker.location.latitude(),
        lng: faker.location.latitude()
      };
      this.locationText ='Company Location ...'
    }
}