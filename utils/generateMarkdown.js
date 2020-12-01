// function to generate markdown for README

const generateMarkdown = (data) => {
  return `
    # ${data.title}

    ### Table Of Contents
        * [Description](#description)
        * [Tech](#tech)
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Contributing](#contributing)
        * [Contact](#contact) 

    ## ${data.description}

    ## ${data.tech}

    ## ${data.installation}

    ## ${data.usage}

    ## ${data.credits}

    ## ${data.license}

    ## ${data.contributing}

    ## ${data.contact}

        ### ${data.github}

        ### ${data.email}
`;
};

module.exports = generateMarkdown;