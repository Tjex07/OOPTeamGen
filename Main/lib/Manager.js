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
}

module.exports = Manager;



// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your manager?',
//     },
//     {
//       type: 'input',
//       name: 'ID',
//       message: 'What is their employee ID?',
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'What is their office number',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What email address will connect you with the manager?',
//     },
    
//   ]);

  
//   };

  

