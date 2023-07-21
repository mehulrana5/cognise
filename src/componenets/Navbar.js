import React from 'react';
import Modes from './Modes';
import logo from '../logo.png';
import { useContext } from 'react';
import CogContext from '../context/CogContext';
import Login_modal from './Login';
import AddArticle from './AddArticle';
import '../App.css'

export default function Navbar() {
    const context = useContext(CogContext);

    function skip() {
        context.setActive(0);
        context.setTimeup(0);
    }

    function endTest() {
        var n = window.confirm("end test?");
        if (n) {
            document.querySelector('input[name="modeOptions"]:checked').checked = false;
            context.setBtn(1);
            context.setActive(0);
            context.setTimeup(1);
            context.setMode("easy")
            context.setOptions()
            document.querySelector("#mcq-form").reset()
        }
    }
    function addArticle(){
        context.setCanAdd(1);
    }
    function Logout(){
        context.setIsLoggedIn(0);
    }
    function Signin(){
        context.setIsLoggedIn(1);
    }
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
                        <ul className="navbar-nav" style={{color: 'white'}}>
                            <li className="nav-item">
                                <Modes/>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-warning mx-2" onClick={skip} disabled={!context.active}>Skip</button>
                                <button className="btn btn-danger mx-2" onClick={endTest} disabled={context.btn}>End Test</button>
                            </li>
                            <div className="nav-item">
                                <button type="button" class="btn btn-primary mx-2" disabled={context.isLoggedIn} data-bs-toggle="modal" data-bs-target="#Login-modal">Login</button>
                            </div>
                            <div className="nav-item">
                                <button type="button" class="btn btn-primary mx-2" onClick={Signin} disabled={context.isLoggedIn}>Sign in</button>
                            </div>
                            <div className="nav-item">
                                <button className='btn btn-primary mx-2' onClick={addArticle} disabled={!context.isLoggedIn && !context.isAdmin} data-bs-toggle="modal" data-bs-target="#Add-article-modal">Add article</button>
                            </div>
                            <div className="nav-item">
                                <button className='btn btn-primary mx-2' onClick={Logout} disabled={!context.isLoggedIn}>Log out</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <Login_modal/>
            <AddArticle/>
        </div>
    );
}
