import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export const Note = ( { id, text, date, dispatch } ) => {

    const handleDelete = ( id ) => {
        dispatch({
            type: 'erase',
            payload: id,
        });
    }

    return (
        <div className="note">
            <span>{ text }</span>
            <div className="note-footer">
                <small>{ date }</small>
                <MdDeleteForever 
                    className="delete-icon" 
                    size="1.3rem" 
                    onClick={ () => handleDelete(id) }
                />
            </div>
        </div>
    )
}
