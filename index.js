import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonials/testimonial';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />

  </>
);
