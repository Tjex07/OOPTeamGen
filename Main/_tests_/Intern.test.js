const Intern = require("../lib/Intern");


// returning name from input
describe("Intern", () => {

    it("should create an object with properties", () => {
        const Rob = new Intern("Rob Swanson", 2, "email@Parks.com", "u");

        expect(Rob.name).toEqual("Rob Swanson");
        expect(Rob.ID).toEqual(2);
        expect(Rob.email).toEqual("email@Parks.com");
        expect(Rob.school).toEqual("u");
    });
});

