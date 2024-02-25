import './Input.css';
import React, { useState } from 'react';

export default function Input() {
    const [data, setdata] = useState(null)
    const [print, setprint] = useState(false)

    function getData(val) {
        setdata(val.target.value)
        setprint(false)
        // console.warn(val.target.value)
    }
    return (
        <div>{print ? <h2>{data}</h2> : null}
            <input type="text" onChange={getData} />
            <h1>Get Input Box Value</h1>

            <button onClick={()=>{setprint(true)}}>Print Data</button>
        </div>
    )
}
