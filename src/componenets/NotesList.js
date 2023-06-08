import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList(prop){
    return (<div className="notes-list">
        <AddNote handleAddNote = {prop.handleAddNote}/>
        {prop.notes.map((note) => 
        (
        <Note note = {note} handleDeleteNote = {prop.handleDeleteNote} handleEditNote = {prop.handleEditNote} editId = {prop.editId} setEditId = {prop.setEditId} />
        ))}



    </div>)
}