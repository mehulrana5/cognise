import React from 'react';
import Modes from './Modes';
import logo from '../logo.png';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" style={{ backgroundImage: `url(${logo})`, width: '60px', height: '60px',backgroundSize:"contain",backgroundPosition:"center"}} href="/">
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{ color: 'white' }}>
                                <Modes />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
