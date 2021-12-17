#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

welcome({
  title: pkgJson.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: '#FADC00',
  color: '#000000',
  bold: true,
  clear: true,
});

console.log(`
${chalk.bgBlue.bold(` Simen Daehlin `)}

${chalk.italic(`Passionate about building state-of-the-art, easy to use, user-friendly websites and applications as I am, it's no surprise that I go out of my way to seek out new technologies and stay up-to-date on industry trends and advancements.
Currently working as a backend developer at virgin media with Strapi as the choice of backend framework.`)}

🙋 ${chalk.hex('#da1884').inverse(` Website `)} ${chalk.dim(`https://dehlin.dev`)}
😎 ${chalk.hex('#6937FF').inverse(` Blog `)}  ${chalk.dim(`https://blog.dehlin.dev`)}
🌏 ${chalk.hex('#0077b5').inverse.bold(` LinkedIn `)}  ${chalk.dim(`https://www.linkedin.com/in/simendaehlin/`)}
📖 ${chalk.hex('#6cc644').bold.inverse(` Website `)}  ${chalk.dim(`https://github.com/Eventyret`)}
`);
