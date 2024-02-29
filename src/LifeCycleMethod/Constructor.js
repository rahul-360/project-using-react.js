import React from 'react'
class Constructor extends React.Component {
    constructor(){
        super();
        console.warn("Constructor");
        // console.log("hello");
    }
    render() {
        return (
            <div>

                <h1>Constructor is a life cycle method</h1>
            </div>
        )

    }
}
export default Constructor;