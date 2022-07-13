// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs  = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is your GitHub username?',
    'What is your email address?',
    'What is your project title',
    'Please write a short description of your project',
    'What kind of license should your project have?',
    'What command should be run to install dependencies?',
    'What command should be run to run tests?',
    'What does the user need to know about the repo?',
    'What does the user need to know about contributing to the repo?'
];

// TODO: Create a function to write README file
const writeToFile = ({github, email, title, description, license, dependencies, tests, userInfo, userContribute}) => {
    return `
# ${title}
![Github license] ${license}

## Description
${description}

## Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributing)
* [Tests](#tests)
* [Questions] (#questions)
    
## Installation
To install necessary dependencies, run the following command:

------------------------

${dependencies}

------------------------

## Usage
${userInfo}

## License
This project is licensed under the ${license} license.    

## Contributing
${userContribute}

## Tests
To run tests, run the following command:
------------------------

${tests}

------------------------

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${github}(https://github.com/${github}/).
    `
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2],
        },
        {
            type:  'input',
            name:  'description',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'userInfo',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'userContribute',
            message: questions[8],
        }
    ])
    .then((answers) => {
        const readmeContent = writeToFile(answers);

        fs.writeFile('ReadME.md', readmeContent, (err) => 
            err ? console.log(err) : console.log('Successfully created ReadME file!')
        );
    });
}

// Function call to initialize app
init();