import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const AddNote = ({ dispatch }) => {

    const [ noteText, setNoteText ] = useState(
        localStorage.getItem('lastNote') || ''
    );
    const characterLimit = 200;

    const handleInputChange = ({ target }) => {
        if (target.value.length <= characterLimit) {
            setNoteText(target.value);
        }
    }

    const handleAdd = () => {
        
        if (noteText.trim().length > 0) {
            dispatch({
                type: 'add',
                payload: {
                    id: nanoid(),
                    text: noteText,
                    date: new Date().toLocaleDateString()
                }
            });
    
            setNoteText('');
        }   
    }

    useEffect(() => {
        localStorage.setItem('lastNote', noteText);
    }, [ noteText ]);

    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Escribe para agregar una nota"
                onChange={ handleInputChange }
                value={ noteText }
                >

            </textarea>
            <div className="note-footer">
                <small>{ characterLimit - noteText.length } restantes</small>
                <button 
                    className="save"
                    onClick={ handleAdd }
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}



