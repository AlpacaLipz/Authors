import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom'

import CreatePage from './views/CreatePage';
import Dashboard from './views/Dashboard';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<CreatePage/>} />
        <Route path='/authors/:id/edit' element={<EditAuthor/>} />
      </Routes>
    </div>
  );
}

export default App;
