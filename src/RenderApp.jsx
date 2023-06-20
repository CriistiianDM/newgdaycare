//import Libs
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

//Import Components
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function RenderApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<><h1>No Found Route</h1></>} />
        </Routes>
      </Router>
    </>
  );
}