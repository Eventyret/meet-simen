#!/usr/bin/env node
const init = require('./utils/init');
const data = require('./utils/data');
const alert = require('cli-alerts');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');
const input = cli.input;
const flags = cli.flags;
(async () => {
  // Init and help.
  init(flags.clear);
  input.includes('help') && cli.showHelp(0);

  // Print out the info
  flags.bio && console.log(data.bio);
  flags.social && console.log(data.social);
  flags.ad && alert({ type: 'info', msg: data.ad });

  // Stats.
  await stats();

  // debug info if needed
  debug(flags.debug, cli);
})();
