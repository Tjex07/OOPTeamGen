const Engineer = require("../lib/Engineer");


// returning name from input
describe("Engineer", () => {

    it("should create an object with properties", () => {
        const Rob = new Engineer("Rob Swanson", 2, "email@Parks.com", "RobGitHub.com");

        expect(Rob.name).toEqual("Rob Swanson");
        expect(Rob.ID).toEqual(2);
        expect(Rob.email).toEqual("email@Parks.com");
        expect(Rob.gitHub).toEqual("RobGitHub.com");
    });
});

