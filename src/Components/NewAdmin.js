import './NewAdmin.css'
import React from 'react';
// function NewAdmin() {
//     return (
//         <div>
//             <h2>Hello New Admin</h2>
//         </div>
//     )
// }

// state in class component

class NewAdmin extends React.Component {

    constructor() {
        super();
        this.state = {
            value: "React"
        }
    }
    value() {
        // alert("Hello");
        this.setState({ value: "React 2.0" })
    }
    render() {
        return (
            <>
                <h1>{this.state.value}</h1>
                <button onClick={() => this.value()} > Update 2.0</button>
                <h1>React: state in Class Component </h1>
            </>
        )
    }
}

export default NewAdmin;