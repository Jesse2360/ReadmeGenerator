const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const generateReadme = (answers) =>
`
## ${answers.title}
<br />

## Desceription
${answers.description}
<br />
${answers.license}
<br />

## Table of Content


## Installation
${answers.installation}
<br />

## Usage
${answers.usage}
<br />
## Contributing
${answers.contribution}
<br />

## Questions
${answers.userName}

${answers.email}
`
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
      name: 'installation',
      message: 'What are the steps to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide example or what is this project use for?',
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
        message: 'Choose a license used for this project?',
      },
      {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])
  .then((answers) => {
        const readmeContent = generateReadme(answers);
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