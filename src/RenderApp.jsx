//import Libs
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';

export default function RenderApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<><h1>No Found Route</h1></>} />
        </Routes>
      </Router>
    </>
  );
}