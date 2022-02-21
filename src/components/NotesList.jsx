import React from 'react';
import PropTypes from 'prop-types';
import { Note } from './Note';
import { AddNote } from './AddNote';

export const NotesList = ({ notes, dispatch }) => {
    return (
        <div className="notes-list">
            {
                notes.map(note => (
                    <Note key={ note.id } dispatch={ dispatch } { ...note } />
                ))
            }
            <AddNote dispatch={ dispatch }/>
        </div>
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
}

NotesList.defaultProps = {
    notes: [],
}




