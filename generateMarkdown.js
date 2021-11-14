
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }else if (license === 'MPL') {
      return `[![License: MPL](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }else if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }else if (license === 'PDDL') {
      return `[![License: PDDL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
    };

}





function generateMarkdown(data) {
  let license = renderLicenseBadge(data.license);
  return `
  
# ${data.title}

## Description

 ${data.desc1}
 ${data.desc2}
 ${data.desc3}
 ${data.desc4}


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
 ${data.install}

## Usage
 ${data.usage}

## Credits
 ${data.collaborator} ${data.collaborator_url}

 ${data.asset} ${data.asset_url}

 ${data.tutorials}

## License

 ${data.license}

## Badges

 ${license}

## Features

 ${data.features}

## How to Contribute

 ${data.contribute}

## Tests

 ${data.test}







`;
}

module.exports = generateMarkdown;
