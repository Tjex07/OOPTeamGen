const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, ID, email, gitHub) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.gitHub = gitHub;
  }


  getRole() {
    return "Engineer"
  }

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your Engineer?',
//     },
//     {
//       type: 'input',
//       name: 'ID',
//       message: 'What is their employee ID?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What email address will connect you with the Engineer?',
//     },
//     {
//       type: 'input',
//       name: 'gitHub',
//       message: 'What GitHub username are they using?',
//     },
    
//   ]);

  
//   };

  

