import React from 'react';
import logo from '../logo.png';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserStore from './UserStore.js';
import '../App.css'

function Nav() {
    const loggedIn = UserStore.isLoggedIn;
    console.log(loggedIn);
    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {localStorage.setItem('dark', JSON.stringify(darkMode));}, [darkMode]); //Stores user's Light/Dark mode choice on cache

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

    //if(loggedIn){ //Navbar shown to user if they are logged in (Gives see to see Profile and Sign out)
        return (
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <ReactBootstrap.Navbar className="sticky-top" expand="sm" sticky="top">
                    <ReactBootstrap.Navbar.Brand href="/feed"><img src={logo} style={{height: 90, width: 90}} alt="logo"/></ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                        <Link to="/Landing">
                            <ReactBootstrap.Nav.Link href="/Landing">Home</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="/Feed">
                            <ReactBootstrap.Nav.Link href="/Feed">Feed</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="/Trending">
                            <ReactBootstrap.Nav.Link href="/Trending">Trending</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="/Support">
                            <ReactBootstrap.Nav.Link href="/Support">Support</ReactBootstrap.Nav.Link>
                        </Link>
                        <ReactBootstrap.NavDropdown title="Account" id="basic-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item href="/Profile"><a>Profile</a></ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="/">Logout</ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown>
                        <div className='toggle-container'>
                            <span style={{color: darkMode ? "white" : "yellow"}}> ☀︎ </span>
                            <span className="toggle">
                                <input checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} id="checkbox" className="checkbox" type="checkbox"/>
                                <label htmlFor="checkbox"/>
                            </span>
                            <span style={{color: darkMode ? "slateblue" : "white"}}> ☾ </span>
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
    } /*else {
        return ( //Navbar variation shown to user if they are not logged in
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <ReactBootstrap.Navbar expand="sm" sticky="top">
                    <ReactBootstrap.Navbar.Brand href="/"><img src={logo} style={{height: 70, width: 70}} alt="logo"/></ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                        <Link to="/">
                            <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="/Support">
                            <ReactBootstrap.Nav.Link href="/support">Support</ReactBootstrap.Nav.Link>
                        </Link>
                        <div className='toggle-container'>
                            <span style={{color: darkMode ? "white" : "yellow"}}> ☀︎ </span>
                            <span className="toggle">
                                <input checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} id="checkbox" className="checkbox" type="checkbox"/>
                                <label htmlFor="checkbox"/>
                            </span>
                            <span style={{color: darkMode ? "slateblue" : "white"}}> ☾ </span>
                        </div>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
            </div>
        )
    }*/
//}

export default Nav;
