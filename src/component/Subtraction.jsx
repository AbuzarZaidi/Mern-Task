import React,{ useContext } from 'react'
import './style.css'
import DataContext from "../context/Data-context";
const Subtraction = () => {
  const {value,flag} = useContext(DataContext);
  return (
    <div className='Box'>
    <p className='val'> {flag===true?`4 - ${value}`:"4"}</p>
    <div className='outerAnsBox'>
    <div className='ansBox'>{flag===true?`${4-value}`:<p className='text'>Print New value</p>}</div>
    </div>
    
        </div>
  )
}

export default Subtraction