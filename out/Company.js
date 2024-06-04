import { faker } from "@faker-js/faker";
var Company = (function () {
    function Company() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.latitude()
        };
    }
    return Company;
}());
export { Company };
//# sourceMappingURL=Company.js.map