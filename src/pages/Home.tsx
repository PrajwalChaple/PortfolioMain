import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ClientLogos from '../components/ClientLogos';
import ServicesList from '../components/ServicesList';
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

interface HomeProps {
  hasLoaded: boolean;
}

export default function Home({ hasLoaded }: HomeProps) {
  return (
    <>
      <Hero hasLoaded={hasLoaded} />
      <About />
      <ClientLogos />
      <ServicesList />
      <ServiceCards />
      <Portfolio />
      <Testimonial />
      <CTA />
    </>
  );
}
