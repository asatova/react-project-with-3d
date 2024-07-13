import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'
import image from './images/FFFFFF-min.png';

function Header() {
    return (
        <div className="container">
            <div className="hero-section">
                <div className="first-hero">
                    <h1> Turn-key Engineering Solution for Your Business Discover the futurure of engineering excellence with BerSTs innovative solutions.</h1>
                </div>
                <div className="second-hero">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default Header;
