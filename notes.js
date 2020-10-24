const fs = require('fs')

const getNotes = function() {
  return 'Your notes...'
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    return note.title === title
  });

  if (duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('Note title taken');
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const findNote = notes.filter(function(note){
    return note.title === title;
  });

  if (findNote.length !== 0) {
    console.log(findNote[0].title);
    console.log('Note deleted');
  } else {
    console.log('Note title not found')
  };
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
  } catch(e) {
      return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
