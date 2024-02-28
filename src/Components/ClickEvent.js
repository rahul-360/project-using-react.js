import { click } from '@testing-library/user-event/dist/click';
import './ClickEvent.css';
import React from 'react';

function ClickEvent() {
    function Clickme() {
        alert("Hello Click Event")
    }
    return (
        <div>
            <h1>Click Event</h1>
            <button onClick={Clickme}>Click me 1</button>
            <br /><br />
            <button onClick={() => alert("Hello React 2.0")}>Click me 2</button>
            <br /><br />
            <button onClick={() => Clickme()}>Click me 3</button>
        </div>
    )
}
export default ClickEvent;