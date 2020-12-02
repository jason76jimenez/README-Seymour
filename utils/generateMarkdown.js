// function to generate markdown for README

function generateMarkdown(data) {
  return `
    # ${data.Title}

    ## Table Of Contents
        * [Description](#description)
        * [Tech](#tech)
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Contributing](#contributing)
        * [Contact](#contact) 

    ## Description
    ${data.description}

    ## Technology
    ${data.tech}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}

    ## Contributing
    ${data.contributing}

    ## Contact
    ${data.contact}

        ### ${data.github}

        ### ${data.email}
`;
}

module.exports = generateMarkdown;