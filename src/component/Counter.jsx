import React, { useContext } from 'react';
import DataContext from "../context/Data-context";
const Counter = () => {
    const {value,incre,decre} = useContext(DataContext);

  return (
    <div className="Box1">
      <div className="val1">
        <div>
          <button className="btn" onClick={incre}>
            +
          </button>
        </div>
        <div>
          {" "}
          <p>{value}</p>
        </div>
        <div>
          {" "}
          <button className="btn" onClick={decre} >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
