import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Items from './pages/Character';
import Home from './pages/Home';
import { Location as Locations } from './pages/Location';
import About from './pages/About';
import Search from './pages/Search';
import DetailLocation from './pages/DetailLocation';
import DetailCharacter from './pages/DetailCharacter';
import AddCharacter from './pages/AddCharacter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-character" element={<AddCharacter />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/detail-location/:id" element={<DetailLocation />} />
        <Route path="/characters" element={<Items />} />
        <Route path="/detail-character/:id" element={<DetailCharacter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
