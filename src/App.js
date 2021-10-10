 
import './App.css';
import Header from './Components/Header';
import {  Switch, Route } from 'react-router-dom'
 import Photos from './pages/photos';
 import Cart from './pages/cart';
 import React from 'react';
 
     

function App() {
 
 
  return (
    <div className="App">
         <Header/>
         <Switch>
            <Route exact  path={process.env.PUBLIC_URL + '/'}> 
              <Photos/>  
            </Route>

            <Route>
              <Cart/>
            </Route>

            
        </Switch>
    </div>
  );
}

export default App;
