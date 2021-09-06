import React from 'react'
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import './index.css';
import {SidebarContainer} from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div className="sidebar-icon" onClick={toggle}>
                <FaTimes />
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                        <LinkS className="sidebar-link" to='introduction' onClick={toggle}>INTRODUCTION</LinkS>
                        <LinkS className="sidebar-link" to='solution' onClick={toggle}>SOLUTION</LinkS>
                        <LinkS className="sidebar-link" to='rateplan' onClick={toggle}>RATE PLAN</LinkS>
                        <LinkS className="sidebar-link" to='login' onClick={toggle}>LOGIN</LinkS>
                        <LinkS className="sidebar-link" to='apply' onClick={toggle}>APPLY FOR FREE USE</LinkS>
                </div>
            </div>
        </SidebarContainer>
    )
}
export default Sidebar;