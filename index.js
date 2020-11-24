const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');
//const pageHTML = generateMarkdown();

//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

const promptReadme = () => {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'author',
            message: 'What is your name? (Required)',
            validate: authorInput => {
                if (authorInput) {
                    return true;
                }else{
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else{
                    console.log('Enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your APP. Include what the APP does, tech used, challenges faced and any future improvements you would like to see.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }else{
                    console.log('Enter a description.');
                }
            }
        },
        {
            type: 'checkbox',
            name: 'tech',
            message: 'Include tech here.',
            choices: ['JavaScript', 'Bootstrap', 'HTML', 'CSS', 'jQuery', 'Node', 'ES6']
        },
        {
            type: 'confirm',
            name: 'confirmTOC',
            message: 'Do you need to add a Table of Contents? y or N (Recommended if it is a large project)',
            default: false,
        },
        {
            type: 'input',
            name: 'TOC',
            message: 'Enter Table of Contents.',
            when: ({confirmTOC}) => {
                if (confirmTOC) {
                    prompt(TOC);
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Give step by step for installation of the application. (Required)'
        },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Provide instructions on how to use the app. (Required)'
//         },
//         {
//             type: 'input',
//             name: 'contributing',
//             message: 'If you want other developers to contribute to your project, add guidlines for how.'
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: '(add tests)'
//         },
        {
            type: 'input',
            name: 'questions',
            message: '(add questions)'
        }
    ])
};

// fs.writeFile('index.html', generateMarkdown(answers), err => {
//     if (err) throw new Error(err);
//     console.log('README complete!');
// });

    promptReadme()
   // .then(promptTOC)
    .then(answers => {
        console.log('answers:', answers);
    })
//pageHTML();
    //.then(readmeData => console.log(readmeData));