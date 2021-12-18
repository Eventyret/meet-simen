#!/usr/bin/env node
const init = require('./utils/init');
const data = require('./utils/data');

(async () => {
  init();
  console.log(data.title);
  console.log(data.bio);
  console.log(data.social);
})();
