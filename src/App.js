import React from 'react';
import Home from './sections/Home';
import Nav from './components/Nav';
import Community from './sections/Community';
import OurMenu from './sections/OurMenu';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="content">
      <Nav />
      <Home />
      <Community />
      <OurMenu />
      <Contact />
    </div>
  );
}

export default App;
