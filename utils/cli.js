const meow = require('meow');

const helpText = `
  Usage
    npx meet-simen [options]
    
  Options
    --social      Show the social info
    --no-social   Don't show the social info
    --ad      Show special ad
    --no-ad   Don't show the special ad
    -d, --debug   Show debug information
    
    
  Examples
  npx meet-simen --no-social
  npx meet-simen --no-ad
  npx meet-simen --debug

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
  },
};
module.exports = meow(helpText, options);
