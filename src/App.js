/**import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react'

import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

 class App extends Component {
  render() {
    return (  
      <BrowserRouter>
      <Home></Home>
      <Menu/>
      <Footer></Footer>
      <Routes>
        <Route path="/Signup" element={<Signup/ >} />
        <Route path="/" element={<LoginForm/ >} />
       
        </Routes></BrowserRouter>
    )
  }
}
export default App;**/
import React from 'react'
 import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';
import DrawerAppBar from './Components/Home';
import Menu from './Components/Menu';

import Homepage from './Components/Homepage';




 const App = () => {
return (
<div className="app">

      <Router> 
               <Routes>
                
                  <Route exact path="/" element={<Homepage/>}/>

                    <Route exact path="/LoginForm" element={<LoginForm/>} />
                    <Route path="/Signup" element={ <Signup/>} />
                    <Route path='/Menu' element={<Menu/>} />
                     </Routes>
            </Router>  

           
            
              
         </div>
    )
   }
 export default App;