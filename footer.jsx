import React from 'react';
import './footer.css';
import logo from '../../assets/LOGO.png';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
   return (
      <footer>
         
         <a href="#" className='footer__logo'>SPARTAN PROGRAMMER</a>

         <a href="#" className='my__logo'>
            <img src={logo} alt="Logo" />
         </a>

         

         <ul className="links">
            <li> <a href="#">Home</a> </li>
            <li> <a href="#about">About</a> </li>
            <li> <a href="#experience">Experience</a> </li>
            <li> <a href="#services">Services</a> </li>
            <li> <a href="#portfolio">Portfolio</a> </li>
            <li> <a href="#testimonials">Testimonials</a> </li>
            <li> <a href="#contact">Contact</a> </li>
         </ul>

         <div className="footer__socials">
            <a href="https://www.facebook.com"><BsFacebook/></a>
            <a href="https://www.linkedin.com"><BsLinkedin/></a>
            <a href="https://www.instagram.com"><FaInstagramSquare/></a>
            <a href="https://www.twitter.com"><BsTwitter/></a>
         </div>

         <div className="footer__copyright">
            <code>&copy; 2023 | SPARTAN PROGRAMMER | All rights reserved</code>
         </div>
      </footer>
   );
}
 
export default Footer;