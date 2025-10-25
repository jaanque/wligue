import React from 'react';
import './Footer.css';

import xLogo from '../assets/x-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import youtubeLogo from '../assets/youtube-logo.svg';
import instagramLogo from '../assets/instagram-logo.svg';
import discordLogo from '../assets/discord-logo.svg';

const socialLinks = [
  { src: xLogo, alt: 'X' },
  { src: linkedinLogo, alt: 'LinkedIn' },
  { src: githubLogo, alt: 'GitHub' },
  { src: youtubeLogo, alt: 'YouTube' },
  { src: instagramLogo, alt: 'Instagram' },
  { src: discordLogo, alt: 'Discord' },
];

const footerLinks = {
  Product: ['What is Postman?', 'Enterprise', 'Spec Hub', 'Flows', 'Postbot', 'VS Code Extension'],
  Resources: ['Postman Docs', 'Academy', 'Community', 'Templates', 'Intergalactic', 'Videos'],
  Company: ['About', 'Careers and culture', 'Contact us', 'Partner program', 'Customer stories'],
  Legal: ['Legal Terms Homepage', 'Terms of Service', 'Privacy policy', 'Cookie notice'],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-column">
              <h3 className="footer-column-title">{title}</h3>
              <ul className="footer-column-list">
                {links.map((link) => (
                  <li key={link}><a href="#" className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-social">
          {socialLinks.map((social) => (
            <a href="#" key={social.alt} className="social-link">
              <img src={social.src} alt={social.alt} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Postman, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
