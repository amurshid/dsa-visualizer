import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './App.css';
import LinkedList from './ds/LinkedList';
import Stack from './ds/Stack';
import Queue from './ds/Queue';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/linked-list" element={<LinkedList />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </Router>
  );
}
export default App;
