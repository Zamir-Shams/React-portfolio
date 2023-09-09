import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {ImStackoverflow} from 'react-icons/im';

const HeaderSocials = () => {
   return ( 
      <div className="header__socials">
         <a href="https://www.linkedin.com/in/zamir-shams/" target='_blank'><BsLinkedin/></a>
         <a href="https://github.com/Zamir-Shams" target='_blank'><FaGithub/></a>
         <a href="https://stackoverflow.com/users/19071537/spartan-programmer" target='_blank'><ImStackoverflow/></a>
      </div>
    );
}
 
export default HeaderSocials;