#!/usr/bin/env node
const init = require('./utils/init');
const data = require('./utils/data');
const alert = require('cli-alerts');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;
(async () => {
  init();
  input.includes('help') && cli.showHelp(0);

  console.log(data.title);
  console.log(data.bio);
  if (flags.social) console.log(data.social);
  if (flags.ad) alert({ type: 'info', msg: data.ad });

  // debug info if needed
  debug(flags.debug, cli);
})();
