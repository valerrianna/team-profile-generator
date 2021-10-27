// const Employee = require("./lib/Employee")
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/page-template.js');
const {writeFile} = require('./utils/generate-site.js');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'managerRole',
        message: 'Are you a manager?',
        choices: ["Yes", "No"],
        validate: managerRole => {
            if (managerRole) {
                choices = "Yes";
              } 
            else {
                console.log('You must be a manager to add employees to the system!');
                return false;
              }
        }
      },
      {
        type: 'input',
        name: 'managerName',
        message: 'Please enter team manager name.',
        validate: managerInput => {
          if (managerInput) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'id',
        message: 'Please enter the ID of the employee.',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an ID number!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please provide an email!');
              return false;
            }
        }
      },
      {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the office number? (enter number with no space or special characters)',
      },
    ]);
};

const promptEmployee = teamData => {
    console.log(`
  ==================
  Add a New Employee
  ==================
  `);
  
    if (!teamData.lists) {
      teamData.lists = [];
    }
    return inquirer
      .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role does this employee have?',
            choices: ["Engineer", "Intern"]
        },
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
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
      ])
      .then(employeeData => {
        teamData.lists.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return promptEmployee(teamData);
        } else {
          return teamData;
        }
      })
}

promptUser()
  .then(promptEmployee)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
//     return copyFile();
  })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
  .catch(err => {
    console.log(err);
  });