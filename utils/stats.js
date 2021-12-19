const axios = require('axios');
const apiURL = `https://api.github.com/users/eventyret`;
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
module.exports = async () => {
  const [error, res] = await to(axios.get(apiURL));
  const ghFollowers = res.data.followers;
  console.log(`Github Followers: ${ghFollowers}`);
  handleError(`API CALL FAILED`, error, false, false);
};
