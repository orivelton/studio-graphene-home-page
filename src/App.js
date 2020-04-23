import React from 'react';
import Home from './sections/Home';
import Nav from './components/Nav';
import OurMenu from './sections/OurMenu';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="content">
      <Nav />
      <Home />
      <OurMenu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
