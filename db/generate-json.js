module.exports = function() {
    var faker = require("./../node_modules/faker/index");
    var _ = require("./../node_modules/lodash/lodash");
    return {

        users: _.times(2, function(n) {
            return {
                id: faker.random.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                username: faker.internet.userName(),
                image: faker.image.avatar(),
                short_description: faker.lorem.sentence()
            };

        }),

        company: _.times(10, function(n) {
            return {
                name: faker.company.companyName(),
                image: faker.image.business(),
                country: faker.address.country(),
                short_description: faker.lorem.sentence(),

            };

        })
    };
};