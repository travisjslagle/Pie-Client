import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/power.svg';

const Logout = (props) => {

    return (
        <div>
            <img src={logoutPic} alt="powerbutton" className="logout" id="logout" onClick={() => props.clearToken()}/>
        </div>
    )
}

export default Logout;