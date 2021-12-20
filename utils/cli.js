const meow = require('meow');
const meowHelper = require('cli-meow-help');

const flags = {
  bio: {
    type: 'boolean',
    default: true,
    desc: `Prints the bio`,
  },
  clear: {
    type: 'boolean',
    default: true,
    desc: `Clears the terminal before printing the info`,
  },
  social: {
    type: 'boolean',
    default: true,
    desc: `Prints the social media links`,
  },
  ad: {
    type: 'boolean',
    default: true,
    desc: `Prints the ad`,
  },
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: `Prints debug info`,
  },
  version: {
    type: 'boolean',
    default: false,
    alias: 'v',
    desc: `Prints the version`,
  },
};

const commands = {
  help: {
    desc: `Prints this help info`,
  },
};

const options = {
  inferType: true,
  hardRejection: false,
  description: false,
  flags,
};

const helpText = meowHelper({
  name: 'npx meet-simen',
  flags,
  commands,
});

module.exports = meow(helpText, options);
