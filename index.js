const inquirer = require('inquirer');

// array of questions for user
//const questions = [

//];

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();





const promptUser = () => {
   inquirer.prompt([
        {
            type: 'input',
            name: 'author',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else{
                    console.log('Please enter a name.');
                    return false;
                }
            }
        }
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is your project\'s name? (Required)'
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Would you like to provide a description of your APP? y or N',
//             confirm: '(add boolean function)'
//         },
//         {
//             type: 'input',
//             name: 'table-of-contents',
//             message: 'Do you need to add a Table of Contents? y or N (Recommended if it is a large project)',
//             confirm: '(add a TOC)'
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'Give step by step for installation of the application. (Required)'
//         },
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
        // {
        //     type: 'input',
        //     name: 'questions',
        //     message: '(add questions)'
        // }
    ])
};
    promptUser().then(answers => console.log(answers));
