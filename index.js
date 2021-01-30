const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = = require()
const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () => {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your Project?',
    },
    {
    type: 'input',
    name: 'projectDescription',
    message: 'Write a description of your project:',
    },
    {
    type: 'input',
    name: 'installationInstructions',
    message: "What are the required installations for this Project?",
    },
    {
    type: 'input',
    name: 'usageInformation',
    message: 'What is the project used for?',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?:',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What tests are included?'
    },
    {
    type: 'list',
    name: 'license',
    message: 'What license is needed for this project, Choose the appropriate one: ',
    choices: [
        'Apache',
        'Academic',
        'Articstic',
        'Eclipse',
        'GNU',
        'ISC',
        'MIT',
        'Mozilla',
        'Open',
    ]
    },
    {
    type: 'input',
    name: 'questions',
    message: 'What to do if there is an issue?',
    },
    {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub Username?',
    },
    {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?',
    },
],



// write to README file
function writeToFile(fileName, data) {}

//create a function to initialize app
function init() {}

// function call to initialze app
init();
