import React, { Component } from 'react';
import logo from '../logo.png';
import '../dark-mode-v2.css'

function Navbar() {
    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {localStorage.setItem('dark', JSON.stringify(darkMode));}, [darkMode]); //Stores user choice Light/Dark mode on cache

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPreferredColorScheme();

        if(isReturningUser){
            return savedMode;
        } else if (userPrefersDark){
            return true;
        } else {
            return false;
        }
    }

    function getPreferredColorScheme(){ //Checks for user's system preference on light/dark mode
        if(!window.matchMedia) return; //No default preference

        return window.matchMedia("(prefers-color-scheme): dark").matches;
    }
    
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <div className='toggle-container'>
                    <span style={{color: darkMode ? "grey" : "yellow"}}>☀︎</span>
                    <span className="toggle">
                        <input checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} id="checkbox" className="checkbox" type="checkbox"/>
                        <label htmlFor="checkbox"/>
                    </span>
                    <span style={{color: darkMode ? "slateblue" : "grey"}}>☽</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;