// npm init -y  (Generates package.json)
// invoke app by: node index.js

// Packages 
const inquirer = require('inquirer');
// to install: npm i inquirer@8.2.4 (Generates node_modules, and package-lock.json. Adds inquirer to dependencies in package.json)
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// to install: npm i inquirer-maxlength-input-prompt
const fs = require('fs');


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
      name: 'name',
    },
    {
      type: 'input',
      message: 'Select a SHAPE COLOR. (Color keyword or hexadecimal number)',
      name: 'fill',
    },
    {
      type: 'input',
      message: 'Name your svg file:',
      name: 'fileName'
    }
  ])
  .then( function savedata (response){
    mydata=response;
    console.log(mydata)
    newFile(mydata);
});

const str = `<svg viewbox="0 0 100 100">

<rect x="10" y="10" width="30" height="30"
fill="red" />

</svg>`

// crear instancia dependiendo del tipo de forma, color, etc. 

// 


const newFile = (mydata) => {
  fs.writeFile(`logo.svg`, str, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
} 


