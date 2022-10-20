const Manager = require("../lib/Manager");


// returning name from input
describe("Manager", () => {

    it("should create an object with properties", () => {
        const Rob = new Manager("Rob Swanson", 2, "email@Parks.com", '55555555555');

        expect(Rob.name).toEqual("Rob Swanson");
        expect(Rob.ID).toEqual(2);
        expect(Rob.email).toEqual("email@Parks.com");
        expect(Rob.officeNumber).toEqual("55555555555");
    });
});

