import React from 'react';
import { Home,ZipCodeInfo } from './components';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
