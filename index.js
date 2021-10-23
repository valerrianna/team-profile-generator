const Employee = require("./lib/Employee")
const inquirer = require('inquirer');

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
      }
    ]);
};
  
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app
promptUser()
// .then(readMeData => {
//     const readMe = generatePage(readMeData);
//     fs.writeFile('./sampleREADME.md', readMe, err => {
//       if (err) throw new Error(err);

//       console.log('Readme complete! Check out your readme.md to see the output!');
//     });
// });