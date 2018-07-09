import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import './App.css';

import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'

// credit to https://github.com/openfootball/world-cup.json

const App = (props) => <BrowserRouter>
  <div className="App">
      <Link to="/demo1">DEMO 1      | </Link>
      <Link to="/demo2">DEMO 2      | </Link>
      <Link to="/demo3">DEMO 3      | </Link>
      <Demo1/>
      <Demo2/>
      <Demo3/>
  </div>
</BrowserRouter>

export default App;
