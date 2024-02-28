import React from "react";

function FunctionAsProps(props) {
    return (
        <div>
            <h1>Function As Props</h1>
            <button onClick={props.data}>Function As Props</button>
        </div>
    )
}
export default FunctionAsProps;  