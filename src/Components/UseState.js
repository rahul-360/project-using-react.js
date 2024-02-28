import React, { useState } from "react";

export default function UseState(props) {
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={props.data}>Function As Props</button>
        </div>
    )
}