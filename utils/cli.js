const meow = require('meow');

const helpText = `
  Usage
    npx meet-simen [options]
    
  Options
    --no-social   Don't show the social info
    --no-ad   Don't show the special ad
    --help   Show help info.
    -d, --debug   Show debug information
    
    
  Examples
  npx meet-simen --no-social
  npx meet-simen --no-ad
  npx meet-simen --debug
  npx meet-simen help

`;
const options = {
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd',
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v',
    },
  },
};
module.exports = meow(helpText, options);
