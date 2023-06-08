import {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import NotesList from "./componenets/NotesList"
import SearchBar from "./componenets/SearchBar";
import Header from "./componenets/Header";

export default function App(){

  const [searchText, setSearchText] = useState('')
  const [notes, setNotes] = useState(
    [
      {
        id: nanoid(),
        title: 'Title-1',
        text: 'This is my first note',
        date: new Date().toLocaleDateString(),
      },
      {
        id: nanoid(),
        title: 'Must Do',
        text: 'Go watch Home Town Cha-cha-cha',
        date: new Date().toLocaleDateString(),
      },
      {
        id: nanoid(),
        title: 'Title-3',
        text: 'Was going to add title, ran into some bugs, didnt have time',
        date: new Date().toLocaleDateString(),
        
      },
      {
        id: nanoid(),
        title: 'Unpopular Opinions',
        text: 'Monica >> Rachel',
        date: new Date().toLocaleDateString(),
      },


    ]
  );

  const [editId, setEditId] = useState(null)


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes)
    }
    console.log(savedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes])


  const editNote = (id, val) => {
    const updatedNotes = [...notes].map((note) => {
      if(note.id == id){
        note.text = val;
      }
      return note;
    })
    setNotes(updatedNotes);
    setEditId(null);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const addNote = (note) => {
    const newNote = {
      id: nanoid(),
      text: note,
      date: new Date().toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  return (<div className="container">
    
    <Header></Header>
    <SearchBar handleSearchText = {setSearchText}></SearchBar>
    <NotesList notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
    handleAddNote = {addNote} handleDeleteNote = {deleteNote} handleEditNote = {editNote} editId = {editId} setEditId = {setEditId}  ></NotesList>
  </div>)
}