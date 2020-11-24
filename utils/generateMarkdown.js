// function to generate markdown for README

const generateMarkdown = (fileName, data) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${fileName}</h1>
        <h2>${name}</h2>
        <h2><a href="https://github.com/${fileName.github}">Github</a><h2>
    [[toc]]
        </body>
    </html>
`;
};

module.exports = generateMarkdown;