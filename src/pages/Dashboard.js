import React from 'react';
import "../UI/Exercise";
import Aos from 'aos';
import '../pages/Dashboard.css'
import Exercise from '../UI/Exercise';
import Footer from '../UI/Footer';
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import { useEffect } from 'react'
import Header from '../layout/Header';
import { change } from '../APIConnect';


function Dashboard() {
  useEffect(() => {
    Aos.init()
    change(window.location.href)
  }, [])
  return (
    <>
    <div>
    <Header/>
    <Hero />
    <Exercise/>
    <Testimonials />
    <Footer/>
    </div>
    </>
  );
};

export default Dashboard;