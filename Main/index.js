


// function Employee(name, ID, email, gitHub){
//   this.name = name;
//   this.ID = ID;
//   this.email = email;
//   this.gitHub = gitHub;
// }

// Employee.Manager(name, ID, officeNumber, email, gitHub){
//   this.name = name;
//   this.ID = ID;
//   this.email = email;
//   this.gitHub = gitHub;
// }

// function Employee.Intern(name, school, email, gitHub){
//   this.name = name;
//   this.ID = ID;
//   this.email = email;
//   this.gitHub = gitHub;
// }

const generateHTML = ({ name, ID, email, gitHub }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Hi! My name is ${name}</h1>
  <p class="lead">I am from ${location}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${github}</li>
    <li class="list-group-item">LinkedIn: ${linkedin}</li>
  </ul>
</div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
promptUser()
  // Use writeFile method imported from fs.promises to use promises instead of
  // a callback function
  .then((answers) => writeFile('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));
};

init();