import React from 'react';
import logo from '../logo.png';
import '../dark-mode-v2.css'
//import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap';

function Nav() {
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
            <ReactBootstrap.Navbar expand="md" sticky="top">
                <ReactBootstrap.Navbar.Brand href="/home"><img src={logo} style={{height: 70, width: 70}}/></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link href="/about">About</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/contact">Contact</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.NavDropdown title="Account" id="basic-nav-dropdown">
                        <ReactBootstrap.NavDropdown.Item href="/login">Login</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="/signUp">Sign Up</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="/profile">Profile</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="/logout">Logout</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>
                    <div className='toggle-container'>
                        <span style={{color: darkMode ? "white" : "yellow"}}>☀︎</span>
                        <span className="toggle">
                            <input checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} id="checkbox" className="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox"/>
                        </span>
                        <span style={{color: darkMode ? "slateblue" : "white"}}>☽</span>
                    </div>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Form inline>
                    <ReactBootstrap.FormControl type="text" placeholder="#Workout" className="mr-sm-2" />
                    <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
                    </ReactBootstrap.Form>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default Nav;