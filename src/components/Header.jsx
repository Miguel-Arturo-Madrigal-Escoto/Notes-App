import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io'

export const Header = ({ setDarkMode }) => {
    
    return (
        <div className="header">
            <h1>Notas</h1>
            <div className="mode-btn">
                <button 
                    className="btn-moon"
                    onClick={ () => setDarkMode(true) }
                >
                    <FaMoon size="1.3rem" />
                </button>
                <button 
                    className="btn-sun"
                    onClick={ () => setDarkMode(false) }
                >
                    <IoMdSunny size="1.3rem" />
                </button>
            </div>
        </div>
    )
}
