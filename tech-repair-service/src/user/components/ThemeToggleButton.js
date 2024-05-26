import React, {useContext} from 'react';
import {ThemeContext} from '../../ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className="btn btn-secondary">
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
        </button>
    );
};

export default ThemeToggleButton;