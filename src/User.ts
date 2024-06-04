import { faker } from '@faker-js/faker';
export class User {
     userName:string;
     location:{
        lat:number;
        lng:number;
    }
    constructor(){
       this.userName = faker.person.fullName();
       this.location = {
         lat : faker.location.latitude(),
         lng : faker.location.longitude(),
       }
    }
}