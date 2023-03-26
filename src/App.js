import React,{ useState,useEffect } from 'react';
import './App.css';
import { quotelist } from './actions/quoteaction';
import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import Quote from './components/Quote';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
function App() {
return(
<div className='App'>

<header>
  <Header/>
</header>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/quote' element={<Quote/>}/>
  <Route path='/bookmark' element={<Bookmark/>}/>
</Routes>
   


   </div> 
  );
 }

export default App;
