const Employee = require('./Employee');

class intern extends Employee {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getSchool () {
    return this.school;
  }
  getRole() {
    return "intern"
  }
};
  module.exports = intern;
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your Intern?',
//     },
//     {
//       type: 'input',
//       name: 'School',
//       message: 'What school did they attend?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What email address will connect you with the intern?',
//     },
//     {
//       type: 'input',
//       name: 'gitHub',
//       message: 'What GitHub username are they using?',
//     },
    
//   ]);

  
//   };

  

