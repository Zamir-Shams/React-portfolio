import React from 'react';
import './services.css';
import {GiCheckMark} from 'react-icons/gi';

const Services = () => {
   return ( 
      <section id="services">
         <h2 className='main-shadow'>SERVICES</h2>
         <h2 className='main-title'>SERVICES</h2>
         <div className="container services__container">
            
            <article className="service">
               <div className="service__head">
                  <h3>UI/UX Design</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Establish the right UX process</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Create exceptional user experience</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Discover new business opportunities</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Save Resources</p>
                  </li>
               </ul>
            </article>

            <article className="service">
               <div className="service__head">
                  <h3>Web Dev</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Website development</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Content development</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>CMS website Creation</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Responsive mob-first design </p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>eCommerce development</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Platform engineering</p>
                  </li>
               </ul>
            </article>

            <article className="service">
               <div className="service__head">
                  <h3>Content Creation</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Frontend templates content</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Logo and banner Design</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Visual identity packages</p>
                  </li>
                  <li>
                     <GiCheckMark className='service__list-icon'/>
                     <p>Business cards and systems</p>
                  </li>
               </ul>
            </article>
         </div>

      </section>
    );
}
 
export default Services;