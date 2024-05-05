import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home';
import Tweet from './components/Tweet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Define your routes using <Route> */}
          <Route path="/" element={<Home />} /> {/* Use 'element' prop for the component */}
          <Route path="/tweets" element={<Tweet />} /> {/* Use 'element' prop for the component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
