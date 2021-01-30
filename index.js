const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { kMaxLength } = require('buffer');

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
    name: 'acceptanceCriteria',
    message: 'What is the Acceptance '
}



// write to README file
function writeToFile(fileName, data) {}

//create a function to initialize app
function init() {}

// function call to initialze app
init();
