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
    
      // ================logs answers===============================

      .then((answers) => {
        console.log(answers);

        if(answers.shape == "circle"){

          const newObject = new Circle(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./output/sample.svg", svgContent, function() {
            console.log("Circle has been generated!");
          })

        } else if(answers.shape == "triangle") {

          const newObject = new Triangle(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./output/sample.svg", svgContent, function() {
            console.log("Triangle has been generated!");
          })


        } else if(answers.shape == "square") {

          const newObject = new Square(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./output/sample.svg", svgContent, function() {
            console.log("Square has been generated!");
          })
          
        }

// ===================== catch error ===========================
      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

}

module.exports = CLI;
