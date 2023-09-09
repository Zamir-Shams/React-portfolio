import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineFileDone} from 'react-icons/ai';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

const About = () => {
   return (
      <section id="about">
         <h2 className='main-shadow'>ABOUT ME</h2>
         <h2 className='main-title'>ABOUT ME</h2>

         <div className="container about__container">

            <div className="about__me">
               <div className="about__me-image">
                  <img src={ME} alt="my image" />
               </div>
            </div>

            <div className="about__content">
               <div className="about__cards">
                  <article className="about__card">
                     <FaAward className='about__icon'/>
                     <h5>Experience</h5>
                     <small>3+ Years Working</small>
                  </article>
                  <article className="about__card">
                     <FiUsers className='about__icon'/>
                     <h5>Clients</h5>
                     <small>20+ Happy Clients</small>
                  </article>
                  <article className="about__card">
                     <AiOutlineFileDone className='about__icon'/>
                     <h5>Projects</h5>
                     <small>10+ Done</small>
                  </article>
               </div>

               <p>
               I'm a self-employed Front-End web Developer in Italy. I have crazy passion for UI effects, animations and creating intuitive, dynamic user experiences. Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
               </p>
               <a href="#contact" className='btn btn-primary'>Reach Me</a>
            </div>

         </div>

         <div className="to-top">
            <a href="#"><BsFillArrowUpCircleFill/></a>
         </div>
      </section>
   );
}
 
export default About;