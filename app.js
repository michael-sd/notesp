const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
  console.log('adding note!')
} else if (command === 'remove') {
  console.log('removing note!')
};
