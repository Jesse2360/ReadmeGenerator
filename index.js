const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const generateReadme = (answers) =>
`
# ${answers.title}
<br />

## Description
 ${answers.description}
<br />

License used in this project:
${answers.license}
<br />

## Table of Content
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
<br />

## Installation
 ${answers.installation}
<br />

## Usage
 ${answers.usage}
<br />

## Contributing
 Contributors in this project: ${answers.contribution}
<br />

## Test
 In the command line you can type ${answers.test}
<br />

## Questions

 If you have any other questions or comments you can contact me at:<br />
 My GitHub: https://github.com/${answers.userName}

 you can also email at:
 ${answers.email}
`;

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
        'Open Software License 3.0', 'The Unlicense', 'gnu gpl-3.0', 'None'],
    message: 'Choose a license used for this project?',
    },
    {
    type: 'input',
    name: 'test',
    message: 'How can you run and test this project?',
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

        fs.writeFile("jREADME.md", readmeContent, (error) =>
        error ? console.log(error) : console.log("Ready! Your README.md file has been created!"))
    });
