// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('please enter your name to continue');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'projectTitle',
        message: "What's the title of your project?",
        validate: projectTittleInput => {
            if (projectTittleInput) {
                return true;a
            } else {
                console.log('please enter your email to continue');
                return false;
            }
        }

    }, {
        type: 'input',
        name: 'description',
        message: 'Please tell us a quick description about this project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('please enter your email continue');
                return false;
            }
        }

    
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions?',
        validate: installationInstructionsInput => {
            if (installationInstructionsInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions continue');
                return false;
            }
        }

    },

    {
        type: "input",
        name: "tests",
        message: "How do you run a test?",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter command to run the test to continue');
                return false;
            }
        }
    },

    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "GNU_AGPLv3",
            "Creative_Commons_Zero_Universal",
            "Eclipse_Public_License",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
            "Unlicense",
            "other",
        ],
    },

    {
        type: "input",
        name: "resources",
        message: "what resources did you use to help with this project?",
        validate: resourcesInput => { 
            if (resourcesInput) { 
                return true;
            } else {
                console.log('Please enter command to run the test to continue');
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
                console.log('Please enter your email to continue');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: gethubInput => {
            if (gethubInput) {
                return true;
            } else {
                console.log('Please enter your github to continue ');
                return false;
            }
        }

    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();
