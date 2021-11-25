import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Locations from "./components/Locations";
import BottomNav from "./components/BottomNav";
import Items from "./components/Characters";
import About from "./components/About";
import Location from "./components/Location";
import Item from "./components/Character";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:locationId" element={<Location />} />
          <Route path="/characters" element={<Items />} />
          <Route path="/characters/:sembarang" element={<Item />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;
