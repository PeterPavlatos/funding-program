import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <PricingSection />
      <CTA />
    </div>
  );
};

export default HomePage;