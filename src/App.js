import React from 'react';
import Home from './sections/Home';
import Nav from './components/Nav';
import Community from './sections/Community';
import OurMenu from './sections/OurMenu';

const App = () => {
  return (
    <div className="content">
      <Nav />
      <Home />
      <Community />
      <OurMenu />
    </div>
  );
}

export default App;
