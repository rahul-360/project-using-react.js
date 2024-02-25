import './Student.css'
import React, { useState } from 'react'
function Student(props) {

    const [name, setname] = useState("Props in React")
  
    return (
        <div className='props'>
            <button>Props {props.name} With Function Component</button>
            {/* <h2>Email: {props.email}</h2> */}
            {/* <h2>{props.addr}</h2> */}
            {/* <h1>Hello Propes with function component</h1> */}
            <h2>Hello React: {name}</h2>
            <button onClick={() => { setname("Props in React 2.0") }}>Update more...</button>
        </div>
    )
}
export default Student;