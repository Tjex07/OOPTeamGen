
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

};
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your Employee?',
//     },
//     {
//       type: 'input',
//       name: 'ID',
//       message: 'What is their employee ID?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What email address will connect you with the Emyploee?',
//     },
//     {
//       type: 'input',
//       name: 'gitHub',
//       message: 'What GitHub username are they using?',
//     },
    
//   ]);

  
//   };

  

