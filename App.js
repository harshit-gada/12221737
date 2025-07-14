import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLForm from './URLForm'
import URLStats from './URLStats';
import Redirector from './Redirector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLForm />} />
        <Route path="/stats" element={<URLStats />} />
        <Route path="/:shortcode" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;