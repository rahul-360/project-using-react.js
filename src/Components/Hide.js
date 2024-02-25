import React, { Component } from 'react'
import './Hide.css'

export default function Hide() {
    const [status, setstatus] = React.useState(true)
 


    return (
        <div className='hide'>
            {
                status ? <h1>Hello World</h1> : null
            }
            {/* <button onClick={() => { setstatus(false) }}>Hide</button>
            <button onClick={() => { setstatus(true) }}>Show</button> */}
            <button onClick={() => { setstatus(!status) }}>Toggel</button>
        </div>
    )
}
