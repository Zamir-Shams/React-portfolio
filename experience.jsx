import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {FaLocationArrow} from 'react-icons/fa';
import {BsFillCalendar2DateFill} from 'react-icons/bs';

const Experience = () => {
   return (
      <section id="experience">
         <h2 className='main-shadow'>SKILLS</h2>
         <h2 className='main-title'>SKILLS</h2>

         <div className="container experience__container">
          
            <div className="experience__backend" >
            <h3>Education</h3>
               <div className="experience__content">

                  <article className="experience__details">
                     <small className="text-light">
                     <BsFillCalendar2DateFill className='experience__details-icon'/>
                        2017 - 2021
                     </small>
                     <h5> <BsPatchCheckFill className='experience__details-icon'/> Bachelor in Software Engineering</h5>
                     <small className="text-light">
                        <FaLocationArrow className='experience__details-icon'/>
                        RANA University, Kabul AF
                     </small>
                  </article>

                  <article className="experience__details">
                     <small className="text-light">
                     <BsFillCalendar2DateFill className='experience__details-icon'/>
                        2019 - 2020
                     </small>
                     <h5> <BsPatchCheckFill className='experience__details-icon'/>
                     Intermediate English Certificate
                     </h5>
                     <small className="text-light">
                        <FaLocationArrow className='experience__details-icon'/>
                        British Council, Kabul AF
                     </small>
                  </article>

                  <article className="experience__details">
                     <small className="text-light">
                     <BsFillCalendar2DateFill className='experience__details-icon'/>
                        2014 - 2016
                     </small>
                     <h5> <BsPatchCheckFill className='experience__details-icon'/>
                     Defense management/Cybersecurity
                     </h5>
                     <small className="text-light">
                        <FaLocationArrow className='experience__details-icon'/>
                        Uttrakhand Tech. University, India
                     </small>
                  </article>

                  <article className="experience__details">
                     <small className="text-light">
                     <BsFillCalendar2DateFill className='experience__details-icon'/>
                        1999 - 2011
                     </small>
                     <h5> <BsPatchCheckFill className='experience__details-icon'/>
                     High School Diploma 
                     </h5>
                     <small className="text-light">
                        <FaLocationArrow className='experience__details-icon'/>
                        G.H High School, Kabul AF
                     </small>
                  </article>

                  
               </div>
            </div>

            <div className="experience__frontend">
               <h3>Skills</h3>
               <div className="experience__content">

                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>HTML/CSS</h4>
                        <div className="outer">
                           <div className="inner"></div>
                        </div>
                        <small className="percent">92 %</small>
                     </div>
                  </article>
                
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>JavaScript</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'75%'}}></div>
                        </div>
                        <small className="percent">75 %</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>React</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'70%'}}></div>
                        </div>
                        <small className="percent">70 %</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>AJAX/JSON</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'95%'}}></div>
                        </div>
                        <small className="percent">95 %</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>Bootstrap/Tailwind</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'87%'}}></div>
                        </div>
                        <small className="percent">87 %</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>RestAPI</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'80%'}}></div>
                        </div>
                        <small className="percent">80 %</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <div className='skill-progress'>
                        <h4>MySQL</h4>
                        <div className="outer">
                           <div className="inner" style={{width:'40%'}}></div>
                        </div>
                        <small className="percent">40 %</small>
                     </div>
                  </article>
               </div>
            </div>

            <div className="experiences">
               <h3>Work Experiences</h3>

               <div className="experience__content">

                  <article className="experience__details">
                     <h5> Website Master </h5>
                     <small className="text-light" style={{fontStyle:'italic'}}>
                        Part Time | Remote
                     </small>
                     <small className="text-light" 
                     style={{borderBottom:'1px solid var(--color-light)',
                             paddingBottom:'.3rem' 
                           }}> 2022 - 2023
                     </small>
                     <a href="https://www.cdsr.it/#collaboration" 
                     className="exp-btn" target='_blank'>CDS-R</a>
                     <small className="text-light">
                        I developed and designed the website for CDS-R which is a solidarity in Roma, Italy. 
                     </small>
                  </article>
                  <article className="experience__details">
                     <h5> Web Developer </h5>
                     <small className="text-light" style={{fontStyle:'italic'}}>
                        Part Time | Office
                     </small>
                     <small className="text-light" 
                     style={{borderBottom:'1px solid var(--color-light)',
                             paddingBottom:'.3rem' 
                           }}> 2021 - 2022
                     </small>
                     <a href="https://www.progettovite.eu/" 
                     className="exp-btn" target='_blank'>Progettovite</a>
                     <small className="text-light">
                        I have designed a website for an italian governmental agency which is called Frigento commune. 
                     </small>
                  </article>
                  <article className="experience__details">
                     <h5> English Instructor </h5>
                     <small className="text-light" style={{fontStyle:'italic'}}>
                        Full Time | Office
                     </small>
                     <small className="text-light" 
                     style={{borderBottom:'1px solid var(--color-light)',
                             paddingBottom:'.3rem' 
                           }}> 2017 - 2020
                     </small>
                     <a href="https://www.progettovite.eu/" 
                     className="exp-btn" target='_blank'>National Defense University</a>
                     <small className="text-light">
                        I have taught in National Defense University of Afghanistan along with British Council.   
                     </small>
                  </article>

               </div>
            </div>

         </div>
      </section>
   );
}
 
export default Experience;