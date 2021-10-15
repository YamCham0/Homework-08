// TODO: Create a function that returns a license
const inquirer = require('inquirer');
const fs = require('fs');
// function renderLicenseBadge(license) {}
const generateMarkdown = require('./generateMarkdown');
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
        message: "What license did you use for this project?",
        choices: ["MIT", "Apache", "PDDL", "MPL"]
      },
      {
        name: "contribute",
        type: "input",
        message: "How can other Devs can contribute to this project?",
      },
      {
        name: "test",
        type: "input",
        message: "Provide test and examples on how to use this project?",
      },
      {
        name: "collaborate_YN",
        type: "confirm",
        message: "Did you work with others on this project?"
      },
      {
        name: "collaborators",
        type: "input",
        message: "Provide link for collaborator's main web presence:",
        when: (answers) => answers.collaborate_YN === true,
      },
      {
        name: "collaborator_url",
        type: "input",
        message: "Provide link for collaborator's main web presence:",
        when: (answers) => answers.collaborator && answers.collaborator.length > 0,
      },
      {
        name: "assets_YN",
        type: "input",
        message: "Did you used any 3rd party assets?",
        when: (answers) => answers.collaborate_YN === true,
    },
    {
        name: "asset",
        type: "input",
        message: "Provide name of the asset that you used:",
        when: (answers) => answers.assets_YN === true,
    },
    {
        name: "asset_url",
        type: "input",
        message: "Provide link for asset main web presence:",
        when: (answers) =>  answers.asset && answers.asset.length > 0,
    },
    {    
        name: "tutorials",
        type: "input",
        message: "If you follow tutorials, include them as well:",
    },
    {    
        name: "features",
        type: "input",
        message: "What features does this project contain?",
    },
];


function writeToFile (fileName, data) {

  fs.writeFile(fileName, `${data}`, (err) => {
    err ? console.log(err) : console.log("It's Alive!!!")
  })
}


function init() {
inquirer
  .prompt(questions)
  .then((answers) => {
      console.log(answers);
      writeToFile("README.md",generateMarkdown(answers));  
    })

};



init()
