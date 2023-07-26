const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const { Circle, Triangle, Square } = require("./shapes"); //require file//
class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter text',
        },

        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter text color',
        },

        {
          type: 'list',
          name: 'shape',
          message: 'select shape',
          choices: ['circle', 'triangle', 'square']
        },

        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter your shape color',
        },
      ])
    
      .then((answers) => {
        console.log(answers);

        if(answers.shape == "circle"){

          const newObject = new Circle(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

        } else if(answers.shape == "triangle") {

        } else if(answers.shape == "square") {
          
        }


      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

}

module.exports = CLI;
