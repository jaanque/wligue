import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import Resources from './components/Resources';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustedBy />
      <Stats />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
