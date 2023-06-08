import DeleteIcon from '@mui/icons-material/Delete'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
export default function Note(prop){

    const [editText, setEditText] = useState(prop.note.text);

    const handleDeleteClick = () => {
        prop.handleDeleteNote(prop.note.id)
    }

    const handleEditClick = () => {
        prop.handleEditNote(prop.note.id, editText)
    }

    const editChangeHandler = (event) => {
        setEditText(event.target.value) 
    }

    return (
        <div className="note">
            {
                prop.editId == prop.note.id ? (
                <textarea type='text' onChange={editChangeHandler} value={editText} className='edit-note'/>
                )
                :
                (<span>{prop.note.text}</span>)
            }
            <div className="note-footer">
                {prop.editId != prop.note.id ? (<EditSharpIcon className='edit-icon' size='1.em' onClick = {() => prop.setEditId(prop.note.id)}/>)
                :
                (<DoneIcon className='delete-icon' size='1.em' onClick = {handleEditClick} />)
                }
                <DeleteIcon className='delete-icon' size='1.em' onClick = {handleDeleteClick} />
            </div>
        </div>
    )
}