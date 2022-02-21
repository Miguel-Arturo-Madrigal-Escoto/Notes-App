import React from 'react';
import { MdSearch } from 'react-icons/md';

export const Search = ({ setSearchText }) => {

    return (
        <div className="search">
            <label><MdSearch className="search-icon" size="1.3rem" /></label>
            <input 
                type="text" 
                placeholder="Buscar nota" 
                onChange={ ({ target }) => setSearchText(target.value) }
            />
        </div>
    )
}
