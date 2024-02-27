import './Condition.css'
import React, { useState } from 'react'

function Condition() {
    const [log, setlog] = useState(4);
    return (
        <div className='Condition'>
            <h2>Hello React Condition Rendering | If Condition</h2>
            <hr />
            {log == 1 ? <h1>Welcome React 1.0</h1>
                : log == 2 ? <h1>Welcome React 2.0</h1>
                    : log == 3 ? <h1>Welcome React 3.0</h1>
                        : log == 4 ? <h1>Welcome React 4.0</h1>
                            : <h1>Welcome Guest</h1>}
        </div>
    )
}
export default Condition;
