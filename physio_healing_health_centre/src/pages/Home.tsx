import React from 'react';
import './Home.css';
import heroImage from '../assets/hero.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Whychooseus from '../components/Whychooseus';
import HeroSlider from '../components/HeroSlider';
import ClinicLocation from '../components/ClinicLocation';
import Services from './Services';
import Homeabout from '../components/Homeabout';

const Home = () => {
  return (
    <>
    <div>
        <HeroSlider/>
        <Services/>
        <Whychooseus/>
        <Homeabout/>
        <ClinicLocation/>
        <Testimonials />
    </div>

      
    </>
  );
};

export default Home;
