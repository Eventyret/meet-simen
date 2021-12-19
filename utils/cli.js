const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

const helpText = `
  Usage
    ${green(`npx meet-simen`)} ${yellow(`[--options]`)} ${cyan(`<command>`)}
    
  Options
    ${yellow(`--no-social`)}     Don't print the social info
    ${yellow(`--no-ad`)}         Don't print the special ad
    ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug information
    ${yellow(`-v`)}, ${yellow(`--version`)}   Print the version number
    
  Commands
    ${cyan(`help`)}    Print CLI help information
  
    
    
  Examples
  ${green(`npx meet-simen`)} ${yellow(`--no-social`)}
  ${green(`npx meet-simen`)} -${yellow(`-no-ad`)}
  ${green(`npx meet-simen`)} ${yellow(`--debug`)}
  ${green(`npx meet-simen`)} ${cyan(`help`)}

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
