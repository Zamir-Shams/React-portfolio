import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import {BiDownArrowAlt} from 'react-icons/bi';



const Header = () => {

   return (
      <header>
         <div className="container header__container">
            <h2>Hello I'm</h2>
            <h1>ZAMIR SHAMS</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
               <img src={ME} alt="me" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down
            <BiDownArrowAlt className='scroll__down-icon'/>
            </a>
         </div>
      </header>
   );
}
 
export default Header;