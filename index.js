const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

//SVG settings
class Svg {
    constructor() {
        this.text = '';
        this.shapes = '';
    }
    render() {

    
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">${this.text}${this.shapes}</svg>`;
    }
    setText(text,color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapes(shapes) {
        this.shapes = shapes.render();
    }
}

//inquirer user prompts
inquirer
    .prompt([
{
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters.',
    },
{
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text? Enter a color (or hex code).',
    },
{
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle'],
    },
{
        type: 'list',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? Enter a color (or hex code).',
    },
])
    .then((answers) => {
        const svg = new Svg();
        svg.setText(answers.text, answers.textColor);
        switch (answers.shape) {
            case 'circle':
                svg.setShapes(new Circle(answers.shapeColor));
                break;
            case 'square':
                svg.setShapes(new Square(answers.shapeColor));
                break;
            case 'triangle':
                svg.setShapes(new Triangle(answers.shapeColor));
                break;
            default:
                break;
        }
        writeToFile('logo.svg', svg.render());
    });

//function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}