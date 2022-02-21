import React, { useEffect, useReducer, useState } from 'react';
import { Header } from './components/Header';
import { NotesList } from './components/NotesList';
import { Search } from './components/Search';
import { notesReducer } from './helpers/notesReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

export const App = () => {
    const [ _notes, dispatch ] = useReducer(notesReducer, [], init);
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    );
    const [ searchText, setSearchText ] = useState('');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(_notes));
        localStorage.setItem('darkMode', darkMode.toString());
    }, [ _notes, darkMode ]);

    return (
        <div className={`${ darkMode ? 'body dark-mode' : 'body'}`}>
            <div className="container">
                <Header setDarkMode={ setDarkMode }/>
                <Search 
                    setSearchText={ setSearchText }
                />
                <NotesList 
                    notes={ 
                        _notes.filter(note => (
                            note.text.toLowerCase().includes(searchText.toLowerCase())
                        ))
                    } 
                    dispatch={ dispatch } 
                />
            </div>
        </div>
    )
}


