#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const website = chalk.hex('#da1884').inverse;
const blog = chalk.hex('#6937FF').inverse;
const linkedIn = chalk.hex('#0077b5').inverse.bold;
const github = chalk.hex('#6cc644').bold.inverse;
const titleClr = chalk.hex('#FADC00').bold.inverse;
const italic = chalk.italic;
const sym = require('log-symbols');
const dim = chalk.dim;
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
${titleClr(` Simen Daehlin `)}

${italic(`Passionate about building state-of-the-art, easy to use, user-friendly websites and applications as I am, it's no surprise that I go out of my way to seek out new technologies and stay up-to-date on industry trends and advancements.
Currently working as a backend developer at virgin media with Strapi as the choice of backend framework.`)}

🙋 ${website(` Website `)} ${dim(`https://dehlin.dev`)}
😎 ${blog(` Blog `)}  ${dim(`https://blog.dehlin.dev`)}
🌏 ${linkedIn(` LinkedIn `)}  ${dim(`https://www.linkedin.com/in/simendaehlin/`)}
📖 ${github(` Github `)}  ${dim(`https://github.com/Eventyret`)}
`);
