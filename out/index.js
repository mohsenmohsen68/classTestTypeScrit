import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from './CustomMap';
var usr = new User();
console.log('my user : ', usr);
var cmpny = new Company();
console.log('company', cmpny);
var myMap = new CustomMap();
myMap.addMarker(usr);
myMap.addMarker(cmpny);
//# sourceMappingURL=index.js.map