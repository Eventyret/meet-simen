const ora = require('ora');
const axios = require('axios');
const apiURL = `https://api.github.com/users/eventyret`;
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const spinner = ora({ text: '' });
module.exports = async () => {
  spinner.start();
  const [error, res] = await to(axios.get(apiURL));
  const ghFollowers = res.data.followers;
  spinner.stop();
  console.log(`Github Followers: ${ghFollowers}`);
  handleError(`API CALL FAILED`, error, false, false);
};
