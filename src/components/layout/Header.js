import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">Our Vision</Link></li>
                    <li><Link to="/about">Our Competencies</Link></li>
                    <li><Link to="/about">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;
