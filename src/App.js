import React from 'react';
import Home from './sections/Home';
import Nav from './components/Nav';
import OurMenu from './sections/OurMenu';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => (
  <>
    <Nav />
    <Home />
    <OurMenu />
    <Contact />
    <Footer />
  </>
);

export default App;
