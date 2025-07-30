import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects
 from './projects';
import Skills from './skills';
import Portfolio from './portfolio';
import Footer from './footer';

function App() {
  return (
    <Router>
   <Routes>
  <Route path="/" element={<Portfolio />} />        
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/footer" element={<Footer />} />

</Routes>

    </Router>
  );
}

export default App;
