import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const App = () => {
const [counter,setCounter]=useState(1)
const [classValue,setClassValue]=useState('normal')


useEffect(()=>{
  if(counter%3==0 && counter%5==0){

    setClassValue('fizzbuzz')
  }
  else if(counter%5==0){
    setClassValue("buzz")
  }else if(counter%3==0){
    setClassValue("fizz")
  } else{
    setClassValue('normal')
  }
},[counter])
  
const onIncrementHandler=()=>{
  setCounter(counter+1)
}

const onDecrementHandler=()=>{
  setCounter(counter-1)
  
}

  return (
    <div id="main">
      <div id="counter" className={classValue}>{counter}</div>
      <button id="increment" onClick={onIncrementHandler}>increment</button>
      <button id="decrement" onClick={onDecrementHandler}>decrement</button>
    </div>
  )
}


export default App;
