console.log('notes app started');
const yargs = require('yargs');
const argv = yargs.argv;
console.log(argv);
const notes = require('./notes_app.js');
var title = yargs.argv.title;
var body = yargs.argv.body;
var cmd = yargs.argv._[0];
if(cmd === "add"){
    console.log('adding your note');
    console.log(title)
    notes.addnote(title,body)
}
else if(cmd === "remove"){
    console.log('removing the note')
    notes.removenote(title)
}
else if(cmd === "read"){
    console.log('reading the note')
    notes.readnote(title)
}
else if(cmd === "list"){
    console.log('listing all the notes')
    notes.listnotes()
}
else{
    console.log("Command unknown. Note : use add, remove, read, list commands.")
}