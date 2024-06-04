import { faker } from '@faker-js/faker';
var User = (function () {
    function User() {
        this.userName = faker.person.fullName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        },
            this.locationText = 'User Location ...';
    }
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map