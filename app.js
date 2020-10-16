const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const notes = getNotes();

console.log(notes);
console.log(validator.isURL('https://www.npmjs.com/package/validator'));
console.log(chalk.green('Success!'))
console.log(chalk.green.bold.inverse('Success!'))
