import React from 'react';
import './Navbar.css';
import piePic from '../../assets/apple-pie.svg';
import Logout from './Logout/Logout'

// 'props' is a placeholder for info passed from a parent element -- can only be passed parent -> child
const Navbar = (props) => {

    return (
        <div>
            <nav>
                <img id="piePic" src={piePic} alt="pie"/>
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;