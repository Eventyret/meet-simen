const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJson = require('./../package.json');

module.exports = (clear) => {
  unhandled();

  welcome({
    title: pkgJson.name,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: '#FADC00',
    color: '#000000',
    bold: true,
    clear,
  });

  checkNode('10');
};
