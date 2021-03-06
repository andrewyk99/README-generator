// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, renderLicenseBadge} = require('./utils/generateMarkdown.js');

// Array of questions for user input
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'fileName',
                message: 'What is the name of your project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter the name of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide instructions on how to install your project step-by-step in order to get the development environment running.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select a license or "N/A" if one was not used.',
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'If you would like others to contribute, write instructions on how to do so. If not, instruct that you do not wish for it to be modified.'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Write tests for your project, include examples on how to run them.'
            },
            {
                type: 'input',
                name: 'credit',
                message: 'List contributors with their GitHub profiles. If third-party assets used list required attribution and links.'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Type in your GitHub account name.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Type in your email address.'
            }
        ]);
};

// Function to write README file
const writeToFile = (projectTitle, answers) => {
    const generateRM = // Hard code the format of the professional README
`# ${projectTitle} ${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credit](#credit)
- [Questions](#questions)

## Installation
${answers.installation}

## License
${generateMarkdown(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Credit
${answers.credit}

## Questions
If you have any questions, you can contact me through ${answers.email}.<br>
GitHub Account: https://github.com/${answers.github}
`
    return new Promise((resolve, reject) => {
        fs.writeFile( './dist/' + projectTitle + '.md', generateRM, err => { // Creates README file and places it into the 'dist' folder
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created! Check the "dist" folder to see your file!'
            });
        });
    })
    // Terminal notifies user if promise had an error, if not it will display a message that the README was created
    .then(writeToFileResponse => {
    console.log(writeToFileResponse)
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then(answers => {
            const { fileName, ...data } = answers;
            writeToFile(fileName, data)
        });
};

// Function call to initialize app
init();
