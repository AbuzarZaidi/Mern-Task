import React, { useState} from 'react';

const DataContext = React.createContext({
  value:0,
  flag:false,
  incre:()=>{},
  decre:()=>{},
});

export const DataContextProvider = (props) => {
    const [value,setValue]=useState(0)
    const[flag,setFlag]=useState(false);
const increHandler=()=>{
    setValue(value+1)
    if(flag===false){
      setFlag(true)
    }
    
}
const decreHandler=()=>{
    setValue(value-1)
    if(flag===false){
      setFlag(true)
    }
}



  return (
    <DataContext.Provider
      value={{
        value:value,
       incre:increHandler,
       decre:decreHandler,
flag:flag,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;