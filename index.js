const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instruction and examples for use.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'if any, provide any contributors to your project?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache license 2.0', 'Boost Software License 1.0', 'MIT', 'Mozilla Public License 2.0',
         'Open Software License 3.0', 'The Unlicense', 'gnu gpl-3.0'],
        message: 'Choose a license for your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    

  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Success, README.md file has been generated");
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// TODO: Include packages needed for this application