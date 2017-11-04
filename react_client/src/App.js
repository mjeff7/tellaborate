import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import ExtendStory from './pages/ExtendStory';

const Landing = () => null;

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/profile" component={Profile} />
      <Route path="/extend" component={ExtendStory} />
      <Route path="/landing" component={Landing} />
    </div>
  </BrowserRouter>
);

export default App;
