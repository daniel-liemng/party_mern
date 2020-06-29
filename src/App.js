import React from 'react';

import './App.css';

import GuestState from './context/guestContext/GuestState';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <GuestState>
      <div>
        <Navbar />
        <Home />
      </div>
    </GuestState>
  );
}

export default App;
