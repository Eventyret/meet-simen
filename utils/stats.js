const ora = require('ora');
const { green, yellow } = require('chalk');
const axios = require('axios');
const apiURL = `https://api.github.com/users/eventyret`;
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const spinner = ora({ text: '' });
module.exports = async () => {
  spinner.start(`${yellow('FOLLOWERS')} 🦄 Finding unicorns on Github`);
  const [error, res] = await to(axios.get(apiURL));
  const { public_repos: repos, followers } = res.data;
  spinner.stop();
  console.log(`Github Followers: ${followers}`);
  console.log(`Github Repos: ${repos}`);
  console.log();
  handleError(`API CALL FAILED`, error, false, false);
};
