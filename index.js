const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () =>
    inquirer.prompt([
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
            { name: 'None', value: ' '},
            { name: 'Apache License 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
            { name: 'GNU General Public License v3.0', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' },
            { name: 'MIT License', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },
            { name: 'BSD 2-Clause "Simplified" License', value: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' },
            { name: 'BSD 3-Clause "New" or "Revised License', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' },
            { name: 'Boost Software License 1.0', value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)' },
            { name: 'Creative Commons Zero v1.0 Universal', value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)' },
            { name: 'Eclipse Public License 2.0', value: '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)' },
            { name: 'GNU Affero General Public License v3.0', value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)' },
            { name: 'GNU General Public License v2.0', value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)' },
            { name: 'GNU Lesser General Public License v2.1', value: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)' },
            { name: 'Mozilla Public License 2.0', value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' },
            { name: 'The Unlicense', value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' }
            ]
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What to do if there is an issue?',
    },
    {
        type: 'input',
        name: 'future',
        message: 'Will there be any future developments?',
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
])

    const generateReadme = (response) =>

`# ${response.projectName}

${answer.license}

## Description 

${response.projectDescription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [License](#license)

* [Questions](#questions)

* [Future](#future)

* [Contact](#contact)

## Installation
${response.installationInstructions}    

## Usage
${response.usageInformation}

## Contributions
${response.contributing}

## Tests
${response.tests}

## License 
${response.license}

# Questions
${response.questions}

# Future
${response.future}

# Contact

GitHub username: ${response.GitHub} and Email address: ${response.emailAddress}`

const init = () => {
    promptUser()
    .then((response) => writeFileAsync('README.md', generateReadme(response)))
    .then (() => console.log('Successfully created a README.md'))
    .catch((err) => console.error(err))
};

init();