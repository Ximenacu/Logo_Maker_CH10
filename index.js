// npm init -y  (Generates package.json)
 
// invoke app by: node index.js

// Packages 
const inquirer = require('inquirer');
// to install: npm i inquirer@8.2.4 (Generates node_modules, and package-lock.json. Adds inquirer to dependencies in package.json)
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// to install: npm i inquirer-maxlength-input-prompt

// install JEST:
// npm i jest

const fs = require('fs');

const {Circle, Triangle, Square} = require('./lib/shapes');

// begin: 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
let mydata={}
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      maxLength: 3,
      message: 'Input Initials (3)',
      default: 'ABC',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Select a TEXT COLOR. (Color keyword or hexadecimal number)',
      default: 'red',
      name: 'color',
    },
    {
      type: 'list',
      message: 'Select a SHAPE',
      choices: ['Circle','Triangle','Square'],
      default: 'Circle',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Select a SHAPE COLOR. (Color keyword or hexadecimal number)',
      default: 'white',
      name: 'fill',
    },
    {
      type: 'input',
      message: 'Name your svg file:',
      default: 'logo',
      name: 'fileName'
    }
  ])
  .then( function savedata (response){
    mydata=response;
    console.log(mydata)
    newFile(mydata);
});

const newFile = (mydata) => {
  let Logo;
  switch (mydata.name){
    case 'Circle':
        console.log("A circle")
        Logo = new Circle(mydata.text, mydata.color, mydata.fill);
        break;
      case 'Triangle':
        console.log("A triangle")
        Logo = new Triangle(mydata.text, mydata.color, mydata.fill);
        break;
      case 'Square':
        console.log("A sqr")
        Logo = new Square(mydata.text, mydata.color, mydata.fill);
        break;
  }
  // const myLogo = new `${mydata.name}`(mydata.text, mydata.color, mydata.fill);
  const str = Logo.render();
  const fileNAme = mydata.fileName;
  fs.writeFile(`./examples/${mydata.fileName}.svg`, str, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
} 


