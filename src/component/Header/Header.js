import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import './header.css'
const Header = () => {
    return (
        <nav>
            <ul className='nav-left'>
                <li>HRS</li>
            </ul>
            <ul className='nav-right'>
                <li className="icon"><NotificationsIcon></NotificationsIcon></li>
                <li>Admin</li>
            </ul>
        </nav>
    );
};

export default Header;