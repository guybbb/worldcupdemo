import React from 'react';
import {createRoute} from './utils'
import './App.css';

function Demo1a() {
  return <div>Hello everyone!</div>;
}

const Demo1b = (props) => <div >Hello EVERYONE!</div>;

const Demo1c = (props) => <div>{props.text}</div>;

const Demo1d = (props) => <div style={{backgroundColor:'yellow'}} >{props.children}</div>;

const Demo1 = (props) => 
<div className="Demo1">
        <Demo1a />
        <Demo1b />
        <Demo1c text="I can change this text" />
        <Demo1d ><Demo1a /></Demo1d> 
</div>

export default createRoute(Demo1, '/demo1')


