import React from 'react'
//import logo from '../logo.png';

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
        {/*  
        <a className="navbar-brand" href="#">
            <img src={logo} alt="EXER-HOME"/>
        </a> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Register</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    )
}

export default navbar;