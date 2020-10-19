const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Add notes command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding new note');
  }
});

// Remove notes command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing note');
  }
});
// Read notes
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading note');
  }
});

// List notes
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log('Listing notes');
  }
});

console.log(yargs.argv);
