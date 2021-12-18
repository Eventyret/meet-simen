#!/usr/bin/env node
const init = require('./utils/init');
const data = require('./utils/data');
const meow = require('meow');
const alert = require('cli-alerts');

const helpText = `RUN: npx meet-simen`;
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
  },
};

const cli = meow(helpText, options);

(async () => {
  init();
  console.log(data.title);
  console.log(data.bio);
  if (cli.flags.social) console.log(data.social);
  if (cli.flags.ad) alert({ type: 'info', msg: data.ad });
  console.log(cli.flags);
  console.log(cli.input);
  console.log();
})();
