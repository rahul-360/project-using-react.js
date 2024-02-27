import './Input.css';
import React, { useState } from 'react';

export default function Input() {
    const [data, setdata] = useState(null)
    const [print, setprint] = useState(false)
    // const [radio, setradio] = useState(null)

    function getData(val) {
        setdata(val.target.value)
        setprint(false)
        // setradio(val.target.value)
        // console.warn(val.target.value)
    }
    return (
        <div>{print ? <h2>{data}</h2> : null}
            <input type="text" onChange={getData} />
            <h1>Get Input Box Value</h1>
            <button onClick={() => { setprint(true) }}>Print Data</button>
            {/* <div onClick={()=>{setradio(true)}}>
                <input type="radio" id="html" name="input" value="HTML" />
                <label for="html">HTML</label><br />
                <input type="radio" id="css" name="input" value="CSS" />
                <label for="css">CSS</label><br />
                <input type="radio" id="javascript" name="input" value="JavaScript" />
                <label for="javascript">JavaScript</label>
            </div> */}
        </div>
    )
}
