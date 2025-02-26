import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState("home");

    const handleViewMenu = () => {
        setMenu("menu");
        const menuSection = document.getElementById('explore-menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Your Safety, Our Priority</h2>
                <p ><strong>Ensure Safety with Reliable Fire Equipment Services! From installation to maintenance, we provide top-quality fire safety solutions to protect your home and business. Stay secure with our expert services!</strong></p>
                <button type="button" onClick={handleViewMenu}>View Menu</button>
            </div>
        </div>
    );
};

export default Header;
