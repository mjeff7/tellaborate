import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => null;

const App = () => (
  <BrowserRouter>
    <Route path="/landing" component={Landing} />
  </BrowserRouter>
);

export default App;
