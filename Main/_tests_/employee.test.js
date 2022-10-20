const Employee = require("../lib/Employee");


// returning name from input
describe("Employee", () => {

    it("should create an object with properties", () => {
        const Rob = new Employee("Rob Swanson", 2, "email@Parks.com");

        expect(Rob.name).toEqual("Rob Swanson");
        expect(Rob.ID).toEqual(2);
        expect(Rob.email).toEqual("email@Parks.com");
    });
});

