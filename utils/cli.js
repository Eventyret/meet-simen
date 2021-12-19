const meow = require('meow');

const helpText = `
  Usage
    npx meet-simen [options] <commands>
    
  Options
    --no-social   Don't print the social info
    --no-ad   Don't print the special ad
    -d, --debug   Print debug information
    -v, --version   Print the version number
    
  Commands
    help    PRint CLI help information
  
    
    
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
