import React from 'react';
import './Footer.css'; // Import CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Geeksynergy. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="./#">About Us</a></li>
                    <li><a href="./#">Contact</a></li>
                    <li><a href="./#">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
