const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const roster = [];
const htmlGen = require("./src/htmlGen.js");


   inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your manager?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email address will connect you with the manager?',
    },
    
  ])

  .then((data) => {
    const newManager = new Manager(
      data.name,
      data.ID,
      data.email,
      data.officeNumber
    );
    roster.push(newManager);
    addAnother();
  });

  const addAnother = () => {
    inquirer.prompt([
      {
        type: "list",
        message: "Are the any additional employees to add?",
        name: "newEmployee",
        choices: ["Add Engineer", "Add Intern", "Thats everyone."],
      },
    ])

   .then((data) => {
      switch (data.newEmployee) {
        case "Add Engineer":
          engineerQuestions();
          break;
        case "Add Intern":
          internQuestions();
          break;
        default:
            createRoster();
      }
    });
  };

  const engineerQuestions = () => {
      inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your Engineer?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email address will connect you with the Engineer?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What gitHub username are they using?',
    },
    
  ])

  .then((data) => {
    const newEngineer = new Engineer(
      data.name,
      data.ID,
      data.email,
      data.gitHub
    );
    roster.push(newEngineer);
    addAnother();
  });
}

const internQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your Intern?',
    },
    {
    type: 'input',
      name: 'ID',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did they attend?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email address will connect you with the Intern?',
    },
  ])

 .then((data) => {
    const newIntern = new Intern(
      data.name,
      data.ID,
      data.email,
      data.school
    );
    roster.push(newIntern);
    addAnother();
  });
  
  };

  const createRoster = () => {
    const html = htmlGen(roster);
    console.log("Your roster has been created. You can find your roster profile under ./dist/index.html.")
    fs.writeFileSync("dist/index.html", html);
  };
