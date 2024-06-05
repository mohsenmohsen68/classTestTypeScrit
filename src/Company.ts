import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable{
    name: string;
    catchPhrase: string;
    location: {
        lat:number;
        lng:number;
    };
    popupColor: string;
    locationText:string;
    constructor(){
      this.name = faker.company.name();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
        lat: faker.location.latitude(),
        lng: faker.location.latitude()
      };
      this.locationText ='Company Location ...'
      this.popupColor = 'lightBlue';
    }
}