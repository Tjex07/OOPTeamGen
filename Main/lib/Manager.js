const Employee = require('./Employee');

// // Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
// const { writeFile } = require('fs').promises;

// // Use writeFileSync method to use promises instead of a callback function

class Manager extends Employee {
  constructor(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  }

  getRole() {
    return "Manager"
  }
};
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

  

