const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Add notes command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
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

yargs.parse();
