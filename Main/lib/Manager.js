const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
      super(name, ID, email);
      this.officeNo = officeNumber;
    }
  
    officeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;


  

