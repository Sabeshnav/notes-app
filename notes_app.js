const fs = require('fs')
var getnotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (error) {
        return [];
    }
}
var addnote = (title,body) => {
    console.log(title)
    var notes = getnotes();
    var note ={
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync('notes.txt',JSON.stringify(notes))
}
var removenote = (title) => {
    var notes = getnotes();
    var filterednotes = notes.filter((note) => note.title !== title)
    fs.writeFileSync('notes.txt',JSON.stringify(filterednotes))
}
var readnote = (title) => {
    var notes = getnotes();
    var filterednotes = notes.filter((note) => note.title === title)
    console.log('Title: '+filterednotes[0].title +'\n'+'Body: ' + filterednotes[0].body);
}
var listnotes = () => {
    var notes = getnotes();
    console.log(notes)
}
module.exports ={
    addnote,
    removenote,
    readnote,
    listnotes
}