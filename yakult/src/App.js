import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Forms } from './Forms';
import { Wheel } from './Wheel';
import { Header } from './components/Header';
import { Clock } from './Clock'



function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/forms" element={<Forms/>} />
          <Route path="/wheel" element={<Wheel/>} />
          <Route path="/clock" element={<Clock/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
