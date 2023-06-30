import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className='foot'>
    <footer className='Footer'>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
