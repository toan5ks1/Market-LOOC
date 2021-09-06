import React from 'react';
import './index.css';
import {FaBars} from "react-icons/fa";

const Navbar = ({toggle}) => {
    return (
        <>
            <div className="nav">
                <div className="navbar-container">
                    <div className="nav-logo" to='/'>
                        <p className="nav-brandname">What happened</p>
                    </div>
                    <div className="mobile-icon" onClick={toggle}>
                        <FaBars />
                    </div>
                    <div className="nav-menu">
                        <div className="nav-item">
                            <div className="nav-links" to='introduction'><p className="text">INTRODUCTION</p></div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-links" to='introduction'><p className="text">SOLUTION</p></div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-links" to='introduction'><p className="text">RATE PLAN</p></div>
                        </div>
                        <div className="v-line"></div>
                        <div className="nav-item">
                            <div className="nav-links" to='introduction'><p className="text">LOGIN</p></div>
                        </div>
                        
                        <div className="nav-item">
                            <div className="nav-links" to='introduction'><p className="text">APPLY FOR FREE USE</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar