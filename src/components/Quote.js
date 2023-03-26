
import React,{ useState,useEffect } from 'react';


import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { quotelist } from '../actions/quoteaction';
import './Quote.css'

function Quote() {

     const[quotes,setQuotes] = useState('')

    const getQuotes = async ()=>{
    await fetch("https://type.fit/api/quotes")
     .then(res => res.json())
     .then((data)=>{
       let randomNum = Math.floor(Math.random() * data.length);
       setQuotes(data[randomNum]);
     })
    
 }
 
const bookmark=(quotes,author)=>{
  localStorage.setItem("quotes",quotes)
  
}

 const dispatch = useDispatch()
 
 const result = useSelector(state=>state.quoteReducer)
 console.log(result)
 
 
 
 useEffect(()=>{
    getQuotes();
   dispatch(quotelist())
 },[])


  return (
    <div>

{/* {result.listquotes.text} */}
    <div className='quote'>
    <div className='heading'><h1>THought of The Day</h1></div>
<div className='content_sec' style={{backgroundColor:'gray'}}>
<p>{quotes.text}</p>
<p>{quotes.author}</p>

<Button className='btn btn-dark' onClick={getQuotes}>get Quotes</Button>

</div>

{/* <div className='btnContainer'> */}



 {/* </div> */}
    </div>
    
    </div>
  
  )
}

export default Quote