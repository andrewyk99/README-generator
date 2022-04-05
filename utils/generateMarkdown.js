// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => { // link to create badge of appropriate license
  switch (license) {
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'Mozilla Public License':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return '';
  }
};

// List of license links and will be pulled according to user input
const renderLicenseLink = license => { // provides link to specific linense
  switch (license) {
    case 'GNU AGPLv3':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
      break;
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'GNU LGPLv3':
      return 'https://choosealicense.com/licenses/lgpl-3.0/';
      break;
    case 'Mozilla Public License':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
      break;
    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Boost Software License 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/';
      break;
    case 'The Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
      break;
    case 'N/A': // Returns empty if no license was selected
      return '';
      break;
  }
};

// Function to write what goes in the 'License' section of the README
const renderLicenseSection = license => {
  if(license === 'N/A') { // If user selects 'N/A' the README will write out that the project was not distributed under any license
    return 'This project was not distributed under any license.';
  }
  else {
    return 'Distrubted under ' + license + '.'
  }
};

// Function that dictates what get's filled in that will be placed in the 'License' section
const generateMarkdown = data => {
  return `${renderLicenseSection(data)} ${renderLicenseLink(data)}`;
};

// exports the variables from this page that can be called into 'index.js'
module.exports = {generateMarkdown, renderLicenseBadge};