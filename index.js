#!/usr/bin/env node

const chalk = require('chalk');
const website = chalk.hex('#da1884').inverse;
const blog = chalk.hex('#6937FF').inverse;
const linkedIn = chalk.hex('#0077b5').inverse.bold;
const github = chalk.hex('#6cc644').bold.inverse;
const titleClr = chalk.hex('#FADC00').bold.inverse;
const italic = chalk.italic;

const init = require('./utils/init');
const args = process.argv.slice(2);

const dim = chalk.dim;

const socialInfo = `
🙋 ${website(` Website `)} ${dim(`https://dehlin.dev`)}
😎 ${blog(` Blog `)}  ${dim(`https://blog.dehlin.dev`)}
🌏 ${linkedIn(` LinkedIn `)}  ${dim(`https://www.linkedin.com/in/simendaehlin/`)}
📖 ${github(` Github `)}  ${dim(`https://github.com/Eventyret`)}`;

const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : '';

(async () => {
  init();
  console.log(args);
  console.log(`
${titleClr(` Simen Daehlin `)}

${italic(`Passionate about building state-of-the-art, easy to use, user-friendly websites and applications as I am, it's no surprise that I go out of my way to seek out new technologies and stay up-to-date on industry trends and advancements.
Currently working as a backend developer at virgin media with Strapi as the choice of backend framework.`)}

${social}
`);
})();
