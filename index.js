// npm init -y  (Generates package.json)
// invoke app by: node index.js

// Packages 
const inquirer = require('inquirer');
// to install: npm i inquirer@8.2.4 (Generates node_modules, and package-lock.json. Adds inquirer to dependencies in package.json)
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// to install: npm i inquirer-maxlength-input-prompt

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

let mydata={}
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      maxLength: 3,
      message: 'Input Initials (3)',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Select a TEXT COLOR. (Color keyword or hexadecimal number)',
      name: 'color',
    },
    {
      type: 'list',
      message: 'Select a SHAPE',
      choices: ['Circle','Triangle','Square'],
      name: 'shape',
    },
    {
        type: 'input',
        message: 'Select a SHAPE COLOR. (Color keyword or hexadecimal number)',
        name: 'shape color',
      },
  ])
  .then( function savedata (response){
    mydata=response;
    console.log(mydata)
  });

