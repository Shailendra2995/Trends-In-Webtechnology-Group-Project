/* 
Name: Shailendra Kumar Karki
Student id: 8895277
Email: skarki5277@conestogac.on.ca
 */
import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="images/logo.png" alt="Logo" className="footer-logo" />
          <p>Join the Movement to avoid a local recycling crisis, and download the Recycle Coach App today.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#">Recyclepedia</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">For Municipalities</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Partnerships & White Label</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Software Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © All Rights Reserved Recycle Coach is a trademark of Municipal Media Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
