const Employee = require("./lib/Employee")
const inquirer = require('inquirer');
const fs = require("fs");

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?', 
      },
      {
        type: 'number',
        name: 'id',
        message: 'Please enter the ID of the employee.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },
      {
        type: 'list',
        name: 'role',
        message: 'What role does this employee have?',
        choices: ["Manager", "Engineer", "Intern"]
      },
      {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the office number? (enter number with no space or special characters)',
        when: (input) => input.role === "Manager"
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the github username?',
        when: (input) => input.role === "Engineer"
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the school name?',
        when: (input) => input.role === "Intern"
      }
    ]);
};

promptUser()
// .then(readMeData => {
//     const readMe = generatePage(readMeData);
//     fs.writeFile('./sampleREADME.md', readMe, err => {
//       if (err) throw new Error(err);

//       console.log('Readme complete! Check out your readme.md to see the output!');
//     });
// });