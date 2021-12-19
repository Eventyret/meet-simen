#!/usr/bin/env node
const init = require('./utils/init');
const data = require('./utils/data');
const alert = require('cli-alerts');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;
(async () => {
  init(flags.minimal, flags.clear);
  input.includes('help') && cli.showHelp(0);

  flags.bio && console.log(data.bio);
  flags.social && console.log(data.social);
  flags.ad && alert({ type: 'info', msg: data.ad });

  console.log(data.bio);
  if (flags.social) console.log(data.social);
  if (flags.ad) alert({ type: 'info', msg: data.ad });

  // debug info if needed
  debug(flags.debug, cli);
})();
