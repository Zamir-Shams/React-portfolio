import React from 'react';
import './contact.css';
import {MdMarkEmailUnread} from 'react-icons/md';
import {ImLocation2} from 'react-icons/im';
import {RiWhatsappFill} from 'react-icons/ri';


const Contact = () => {
   return (
      <section id="contact">
         <h2 className='main-shadow'>CONTACT ME</h2>
         <h2 className='main-title'>CONTACT ME</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <div className="add-icon">
                     <MdMarkEmailUnread className='contact__option-icon'/>
                     <h4>Email</h4>
                  </div>
                  <a href="mailto:zamir.shams2014@protonmail.com" target='_blank'>
                     zamir.shams2014@protonmail.com
                  </a>
               </article>
               <article className="contact__option">
                  <div className="add-icon">
                     <RiWhatsappFill className='contact__option-icon'/>
                     <h4>WhatsApp</h4>
                  </div>
                  <a href="https://api.whatsapp.com/send?phone=+393279984850" target='_blank'>
                     +393279984850
                  </a>
               </article>
               <article className="contact__option">
                  <div className="add-icon">
                     <ImLocation2 className='contact__option-icon'/>
                     <h4>Official Location</h4>
                  </div>
                  <a href="https://www.google.com/maps/place/Via+Dante+Alighieri,+1A,+83050+Sant'Angelo+All'esca+AV/@41.0067808,14.9908169,17z/data=!3m1!4b1!4m6!3m5!1s0x133a2a2ef66db975:0xcb0a1bba8a0786d!8m2!3d41.0067768!4d14.9933918!16s%2Fg%2F11csn95wbl?entry=ttu" target='_blank'>
                     83050, Napoli, Italy
                  </a>
               </article>
            </div>

            <form action="">
               <input type="text" name='name' placeholder='Your Full Name' required />
               <input type="email" name='email' placeholder='Your Email' required />
               <textarea name='message' rows="7" placeholder='Write your message ...' required />
               <button className="btn btn-primary">Send Message</button>
            </form>
         </div>
      </section>
   );
}
 
export default Contact;