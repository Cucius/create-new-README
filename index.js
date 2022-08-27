const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please Describe the project:",
      name: "description",
    },
    {
      type: "input",
      message: "Write the installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Outline the usage information:",
      name: "usage",
    },
    {
      type: "input",
      message: "Outline contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Detail testing information:",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "checkbox",
      message: "What is your email address?",
      choices: [
        { name: "license1", value: "license1" },
        { name: "license2", value: "license2" },
        { name: "license3", value: "license3" },
      ],
      name: "licenses",
    },
  ])
  .then((data) => {
    const baseREADME = ` 
# ${data.title}

## Description
    
    ${data.description} 
    
    
### Table of Contents
    
**1. [Installation Instructions](#installation)**
    
**2. [Usage Information](#usage)**
    
**3. [Contribution Guidelines](#contribution)**
    
**4. [Testing](#testing)**
    
**5. [License Information](#license-information)**
    
**6. [Questions](#questions)**
    
    
## Installation
     
    ${data.installation} 
    
## Usage
     
    ${data.usage}
    
    
## Contribution
    
    ${data.contribution}
    
    
## Testing
    
    ${data.tests}
    
    
## License Information
    
    ${data.licenses}
    
    
    
## Questions
        
    Any additional questions?
    
    You can email me at: 
    ${data.email}
    
    Find my GitHub at:
    
    [Chase Metherd](https://github.com/${data.github}/)
      
`;
    //Writes the received data into the baseHtml
    fs.writeFile("README.md", baseREADME, (err) => {
      err ? console.log("Fix it") : console.log("Well Done");
    });
  });
