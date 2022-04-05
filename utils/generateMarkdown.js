// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  switch (license) {
    case 'GNU AGPLv3':
      return '';
      break;
    case 'GNU GPLv3':
      return '';
      break;
    case 'GNU LGPLv3':
      return '';
      break;
    case 'Mozilla Public License':
      return '';
      break;
    case 'Apache License 2.0':
      return '';
      break;
    case 'MIT License':
      return '';
      break;
    case 'Boost Software License 1.0':
      return '';
      break;
    case 'The Unlicense':
      return '';
      break;
    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
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
    default:
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(!license) {
    return '';
  }
  return '';
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `## ${data.title}

  ${renderLicenseLink(data)}
  ${renderLicenseSection(data)}
`;
};

module.exports = {generateMarkdown, renderLicenseBadge};