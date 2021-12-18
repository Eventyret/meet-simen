const alert = require('cli-alerts');

module.exports = (isDebug, input, flags) => {
  if (!isDebug) return;
  alert({ type: 'warning', msg: `DEBUGGING INFO ↓` });
  console.log(`input`, input);
  console.log(`flags`, flags);
  console.log();
};
