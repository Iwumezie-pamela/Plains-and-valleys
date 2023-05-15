import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Properties from './pages/Properties';
import Services from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property' element={<Properties />} />
          <Route path='/service' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
