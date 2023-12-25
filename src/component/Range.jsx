import React, { useState } from "react";
import './range.css'

export default function Range(props) {
  const [user, setUser] = useState(props.value);
  

  const onRangeChange = (e) => {
    setUser(e.target.value);
    const val =parseInt(user)
    props.Amount(val)
  };

  const generateOptions = () => {
    const options = [];
    const s=props.min
    for (let i = props.min; i <= props.max; i += props.skip) {
      options.push(<option key={i} value={i} />);
    }
    return options;
  };

  return (
    <div className="">
        <label htmlFor="">{props.name}</label>
        <p>{props.sym}{props.value}
      </p>
      <input
        type="range"
        id="myRange"
        min={props.min}
        max={props.max}
        value={props.value}
        onInput={onRangeChange}
        style={{
          width: "100%",
          margin: "10px 0",
          padding: "5px",
        }}
        list="tickmarks"
      />
      <div className="flex justify-between">
        <label htmlFor="">{props.sym}{props.min}</label>
        <label htmlFor="">{props.sym}{props.max}</label>
      </div>
      <datalist id="tickmarks">
        {generateOptions()}
      </datalist>
      
    </div>
  );
}
