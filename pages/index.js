import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Nation from '../components/Nation';
import Group from '../components/Group';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Nation />
      <Group />
      <Footer />
      <Meta />
    </div>
  );
}
