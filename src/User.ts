import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class User implements Mappable {
     userName:string;
     location:{
        lat:number;
        lng:number;
    };
    popupColor: string;
    locationText:string;
    constructor(){
       this.userName = faker.person.fullName();
       this.location = {
         lat : faker.location.latitude(),
         lng : faker.location.longitude(),
       },
       this.locationText = 'User Location ...';
       this.popupColor = 'lightGreen';
    }
}