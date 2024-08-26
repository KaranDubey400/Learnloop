import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage'; // Update this if it's actually in components
import ExcalidrawPage from './ExcalidrawPage'; // Update this if it's actually in components
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/whiteboard" element={<ExcalidrawPage />} />
    </Routes>
  );
}

export default App;
