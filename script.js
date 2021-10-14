// TODO: Create a function that returns a license
const inquirer = require('inquirer');
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const questions = [
    {
        name: "title",
        type: "input",
        message: "What' the name of your project?"
      },
      {
        name: "desc1",
        type: "input",
        message: "What's the motivation for this project?"
      },
      {
        name: "desc2",
        type: "input",
        message: "What's the purpose of this project?"
      },
      {
        name: "desc3",
        type: "input",
        message: "What' problem does this project solve?"
      },
      {
        name: "desc4",
        type: "input",
        message: "What' did you learn from this project?"
      },
      {
        name: "install",
        type: "input",
        message: "What' are the steps to install this project?"
      },
      {
        name: "usage",
        type: "input",
        message: "Provide instructions and example for use:"
      },
      {
        name: "license",
        type: "list",
        message: "What' the name of your project?",
        choices: ["MIT", "Apache", "PDDL", "MPL"]
      },
      {
        name: "contribute",
        type: "input",
        message: "How can other Devs can contribute to this project?"
      },
      {
        name: "test",
        type: "input",
        message: "Provide test and examples on how to use this project?",
      },
];

// inquirer
//   .prompt([
//     {
//       name: "user_name",
//       type: "input",
//       message: "What is your name?",
//     },
//   ]);




function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
