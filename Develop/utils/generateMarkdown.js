// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    "GNU_AGPLv3": "https://choosealicense.com/licenses/agpl-3.0/",
    "Creative_Commons_Zero_Universal": "https://choosealicense.com/licenses/cc0-1.0/",
    "Eclipse_Public_License": "https://choosealicense.com/licenses/epl-1.0/",
    "Mozilla": "https://choosealicense.com/licenses/mpl-2.0/",
    "MIT": "https://choosealicense.com/licenses/mit/",
    "Apache": "https://choosealicense.com/licenses/apache-2.0/",
    "Boost": "https://choosealicense.com/licenses/bsl-1.0/",
    "Unlicense": "https://choosealicense.com/licenses/unlicense/",
 
 };
   
   return licenseURLs[license] ? `[License](${licenseURLs[license]})` : "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License This project is licensed under the ${license} license. Click [here](https://choosealicense.com/) for more information.`;
} else {
    return "";
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let tableOfContents = "## Table of Contents\n\n";
  if (data.description) tableOfContents += "- [Description](#description)\n";
  if (data.instructions) tableOfContents += "- [Installation](#installation)\n";
  if (data.usage) tableOfContents += "- [Usage](#usage)\n";
  if (data.contributing) tableOfContents += "- [Contributing](#contributing)\n";
  if (data.tests) tableOfContents += "- [Tests](#tests)\n";
  if (data.resources) tableOfContents += "- [Tests](#tests)\n";
  if (data.license) tableOfContents += "- [License](#license)\n";
  if (data.questions) tableOfContents += "- [Questions](#questions)\n";


  let sectionsContent = "";
  if (data.description) sectionsContent += "## Description\n" + data.description + "\n\n";
  if (data.instructions) sectionsContent += "## Installation\n" + data.instructions + "\n\n";
  if (data.usage) sectionsContent += "## Usage\n" + data.usage + "\n\n";
  if (data.contributing) sectionsContent += "## Contributing\n" + data.contributing + "\n\n";
  if (data.tests) sectionsContent += "## Tests\n" + data.tests + "\n\n";

 
  let licenseSection = "";
  if (data.license) {
    licenseSection = "## License\n" +
      "This project is licensed under the " + data.license + " license. " +
      "Click [here](https://choosealicense.com/licenses/" + data.license.toLowerCase() + "/) for more information.\n\n";
  }

  let resourcesSection = "";
if (data.resources) {
  resourcesSection = "## Resources\n" +
    "Here are the resources used in this project:\n" +
    "- " + data.resources + "\n\n";
}


  const questionsSection = "## Questions\n" +
    "For additional questions, contact " + data.name + " at " + data.email + ". " +
    "Visit [GitHub](https://github.com/" + data.github + ") to view more of their work.";

  
  const markdownContent = "# " + data.projectTitle + "\n\n" +
    tableOfContents + "\n" +
    sectionsContent +
    resourcesSection + "\n" + 
    licenseSection + "\n" +
    questionsSection + "\n";

  return markdownContent;
}



module.exports = generateMarkdown;
