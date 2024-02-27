import './Forms.css'
import React, { useState } from 'react'

export default function Forms() {
    const [name, setname] = useState("");
    const [Tnc, setTnc] = useState(false);
    const [interest, setinterest] = useState("");
    function getFormData(e) {
        console.log(name, Tnc, interest);
        e.preventDefault()
    }
    return (
        <div>
            <h1>Hello React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter Name' onChange={(e) => setname(e.target.value)} />
                <select onChange={(e) => setinterest(e.target.value)}>
                    <option value="Select Option">Select Option</option>
                    <option value="Html">Html</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="JavaScript">React</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
                <button>Clear</button>
            </form>
        </div>
    )
}
