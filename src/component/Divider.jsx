import React,{ useContext } from 'react'
import './style.css'
import DataContext from "../context/Data-context";
const Divider = () => {
  const {value,flag} = useContext(DataContext);
  return (
    <div className='Box'>
<p className='val'>{flag===true?`7 / ${value}`:"7"}</p>
<div className='outerAnsBox'>
<div className='ansBox'>{flag===true?`${7/value}`:<p className='text'>Print New value</p>}</div>
</div>

    </div>
  )
}

export default Divider