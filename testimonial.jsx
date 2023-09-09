import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const data = [
   {
      avatar: AVTR1,
      name: 'Zaki Kohistani',
      job: 'CDS-R CEO',
      review: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.'
   },
   {
      avatar: AVTR2,
      name: 'Mersana Nag',
      job: 'Engineer',
      review: 'Zamir Shams is a talented and professional web developer. He created a stunning portfolio website for me that showcases my work and skills. He was very patient and helpful throughout the process, and he gave me valuable feedback and suggestions.'
   },
   {
      avatar: AVTR3,
      name: 'Giorgia Pascwali',
      job: 'Community Staff',
      review: 'Would this be ok with you? If this makes you even a little bit uncomfortable, no worries at all. But if you are ok with it, I can send you a very short blurb for you to review, or you can write a sentence or two and send it over. Whatever is easiest for you.'
   },
   {
      avatar: AVTR4,
      name: 'Angela Mattio',
      job: 'Designer',
      review: 'Zamir Shams’ portfolio site is definitely one of the best website designs we’ve seen in a while. We specifically love the wacky, dynamic aesthetic of her ‘Testimonials’ section. A series of customer quotes, each with a different brightly colored background, reveal themselves in slideshow format. '
   },
   {
      avatar: AVTR5,
      name: 'Maria Andarabi',
      job: 'Instructor',
      review: 'I learned a lot from your concise portfolio that were not discussed on other sites. The links to other descriptive key phrases I will use to enhance my website. I also appreciate your creative user experience which added to the description.'
   }
]



const Testimonial = () => {
   return (
      <section id="testimonials">
         <h2 className='main-shadow'>OUR CLIENTS</h2>
         <h2 className='main-title'>OUR CLIENTS</h2>

         <Swiper className="container testimonials__container"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
         >
            {
               data.map(({avatar, name, review, job}, index) => {
                  return(
                     <SwiperSlide className="testimonial">
                        <div className="client__avatar">
                           <img src={avatar}/>
                        </div>
                        <h5 className='client__name'>{name}</h5>
                        <h4 className='client__job'>{job}</h4>
                        <small className="client__review">{review}</small>
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </section>
   );
}
 
export default Testimonial;