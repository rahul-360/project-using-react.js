import './User.css';
import React from 'react';
import { useState } from 'react';

function User() {
    const [value, setvalue] = useState(0)
  
    function UpdateValue() {
        setvalue(value + 1);
    }
    // let value = "React";
    // function UpdateValue() {
    //     value = "Javascript";
    //     alert("update data");
    // }
    // function Clicked() {
    // let data = "New Value";
    //     alert(value);
    // }
    return (
        <div>
            {/* <h1>{value}</h1> */}
            {/* <h1>{data}</h1> */}
            {/* <button onClick={Clicked}>Click Me</button> */}
            <h1>{value}</h1>
            <button onClick={UpdateValue}>Update data</button>
        </div>
    );
}
export default User;
