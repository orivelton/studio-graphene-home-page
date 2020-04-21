import React from 'react';
import Home from './sections/Home';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="content">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
