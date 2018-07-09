import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import './App.css';

import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'

// credit to https://github.com/openfootball/world-cup.json

const App = (props) => <BrowserRouter>
  <div className="App">
      <Link to="/demo1">Demo 1 - React 101 | </Link>
      <Link to="/demo2">Demo 2 - Composition | </Link>
      <Link to="/demo3">Demo 3 - Lift State Up | </Link>
      <Demo1/>
      <Demo2/>
      <Demo3/>
  </div>
</BrowserRouter>

export default App;
