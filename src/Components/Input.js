import './Input.css';
import React, { useState } from 'react';

export default function Input() {
    function getData(val) {
        console.warn(val.target.value)
    }
    return (
        <div>
            <h1>Get Input Box Value</h1>
            <input type="text" onChange={getData} />
        </div>
    )
}
