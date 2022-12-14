const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, ID, email, gitHub) {
    super(name, ID, email);
    this.gitHub = gitHub;
  }

  getGithub () {
    return this.gitHub;
}

  getRole() {
    return "Engineer"
  }
};

module.exports = Engineer;   

