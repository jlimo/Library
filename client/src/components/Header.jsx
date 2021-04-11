import React from "react";

import Link from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/renting">Renting</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;