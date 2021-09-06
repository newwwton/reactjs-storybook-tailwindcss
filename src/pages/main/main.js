import React from 'react';
import './main.css';
import Hero from '../../components/organisms/hero/hero';
import ButtonSection from '../../components/organisms/button-section/button-section';
import Footer from '../../components/organisms/footer/footer';

function Main() {
  return (
    <div>
      <Hero title="React + Tailwind + Storybook" />
      <ButtonSection />
      <Footer />
    </div>
  );
}

export default Main;
