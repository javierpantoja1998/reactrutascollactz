import React, { Component } from 'react';
import { BrowserRouter,Route, Routes, useParams } from 'react-router-dom';
import Collatz from './Collatz';
import MenuRutas from './MenuRutas';

export default class Router extends Component {
  render() {
    function CollatzElement() {
        var {numero} = useParams;
        return <Collatz numeroCollatz={numero}/>
    }

    return (
        
        <BrowserRouter>

            <MenuRutas/>

                <Routes>

                    <Route path="/collatz/:numero" element={<CollatzElement/>}></Route>

                </Routes>
        
        
        
        
        </BrowserRouter>
    )
  }
}
