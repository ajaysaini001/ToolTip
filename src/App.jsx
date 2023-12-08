import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Top from './components/home/top/Top';
import Bottom from './components/home/bottom/Bottom';
import Left from './components/home/left/Left';
import Right from './components/home/right/Right';

const App = () => {
  return (
    // Setting up the browser router for navigation
    <BrowserRouter>
      <div className="app">
        {/* Define routes for different paths */}
        <Routes>
          {/* Set the default route to Top component */}
          <Route path='/' element={<Top />} />
          {/* Route for displaying the Top component */}
          <Route path='/top' element={<Top />} />
          {/* Route for displaying the Bottom component */}
          <Route path='/bottom' element={<Bottom />} />
          {/* Route for displaying the Left component */}
          <Route path='/left' element={<Left />} />
          {/* Route for displaying the Right component */}
          <Route path='/right' element={<Right />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
