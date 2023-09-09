import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.jpg';


const data = [
   {
      id: 1,
      image: img1,
      title: 'Moqadas Handicrafts',
      github: 'https://github.com/Zamir-Shams/moqadashandicrafts',
      demo: 'https://moqadashandicrafts.netlify.app/'
   },
   {
      id: 2,
      image: img2,
      title: 'CDSR.it',
      github: 'https://github.com/Zamir-Shams/CDS-R-website',
      demo: 'https://www.cdsr.it/'
   },
   {
      id: 3,
      image: img3,
      title: 'Prosperityinternationalinc.com',
      github: 'https://github.com/Zamir-Shams/prosperityinternationalinc-website',
      demo: 'https://www.prosperityinternationalinc.com'
   },
   {
      id: 4,
      image: img4,
      title: 'Progettovite.eu',
      github: 'https://github.com/Zamir-Shams/progettovite-website',
      demo: 'https://www.progettovite.eu'
   },
   {
      id: 5,
      image: img5,
      title: 'Weather App',
      github: 'https://github.com/Zamir-Shams/weather-app',
      demo: 'https://github.com/Zamir-Shams/weather-app'
   }
]

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h2 className='main-shadow'>PORTFOLIO</h2>
         <h2 className='main-title'>PORTFOLIO</h2>

         <div className="container portfolio__container">
            {
               data.map(({id, image, title, github, demo}) => {
                  return(
                     <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                           <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                     </article>
                  )
               })
            }
         </div>
         <div className="portfolio__item" id='next__project'>
            <div className="next__content">
               <small className='text-light'>Lets talk</small>
               <p>About Your</p>
               <h1>NEXT PROJECT</h1>
            </div>
            <a href='#contact' className="btn btn-primary">GET IN TOUCH</a>
         </div>
      </section>
   );
}
 
export default Portfolio;