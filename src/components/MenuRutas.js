import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Collatz from './Collatz';

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"skyblue"}}>Menu Rutas</h1>
        <ul>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>

            <li>
                <NavLink to='/collatz/203'>COLLATZ 203</NavLink>
            </li>

            <li>
                <NavLink to='/collatz/45'>COLLATZ 45</NavLink>
            </li>

        </ul>
        </div>
    )
  }
}
