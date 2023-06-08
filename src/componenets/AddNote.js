import { useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


export default function AddNote(prop){
    const [noteText, setNoteText] = useState('');
    const characterCount = 300
    const handleNoteText = (event) => {
        if(event.target.value.length <= 300){
            setNoteText(event.target.value);
        }
    }

    const handleSave = () => {
        if(noteText.trim().length > 0){
            prop.handleAddNote(noteText)
            setNoteText('')
        }
    }

    return(
        <div className="note new">
            <textarea rows='8' cols='10' placeholder="Add your note..." value={noteText} onChange={handleNoteText}> 
            </textarea>
            <div className="note-footer">
                <small>{characterCount - noteText.length} chars remaining</small>
                <button className="save" onClick={handleSave}>Save</button>

            </div>
        </div>
    )
}