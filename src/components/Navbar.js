import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={require('../assets/images/paw_logo.png')} 
                     style={{height: '32px'}}
                     onClick={()=>props.setActive('home')}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link btn"
                                    onClick={()=>props.setActive("home")}
                                    >Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn"
                                    onClick={()=>props.setActive("browse")}
                                    >Browse</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn"
                                    onClick={()=>props.setActive("addAnimal")}
                                    >Add Animal</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn"
                                    onClick={()=>props.setActive("guide")}
                                    >Guide</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 