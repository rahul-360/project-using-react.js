import './User.css';
function User() {
    let value = "React";
    let data = "New Value";

    function Clicked() {
        // let data = "New Value";
        alert("Hello, Click Me")
    }
    return (
        <div>
            <h1>{value}</h1>
            <h1>{data}</h1>
            <button onClick={Clicked}>Click Me</button>
        </div>
    );
}
export default User;
