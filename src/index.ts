

import { User } from "./User"
import { Company } from "./Company"
import {CustomMap} from './CustomMap' 
const usr = new User()
console.log('my user : ',usr)
const cmpny = new Company()
console.log('company', cmpny)
const myMap = new CustomMap()
myMap.addUserMarker(usr)
myMap.addCompanyMarker(cmpny)

