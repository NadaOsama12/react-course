import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

function App(props) {

  const [ email, setEmail ] = useState('')
  const [ update, setupdatePage ] = useState(false)


  useEffect(()=>{
   
   setupdatePage(true)
   },update)
   
    if( update === true){
      const myTime = setTimeout(()=>{
      <Spinner/>
      setupdatePage(false)    
    },2000)
     return  myTime
    }else if( update === false){
  return (
      <>
    
      <h1>This is your email:{email}</h1>
    <form>
     <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
     <button type='button' className='btn btn-primary' onClick={()=>setEmail('')}>Reset</button>
     <button className='btn btn-primary' onClick={update}>Update</button>
    </form>
    </> 
  );
}}

export default App;
