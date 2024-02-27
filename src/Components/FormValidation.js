import './FormValidation.css'
import React, { useState } from "react";
function FormValidation() {
    const [user, setUser] = useState("");
    const [password, setpassword] = useState("");
    const [userErr, setuserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        if (user.length < 3 || password.length < 3)
        {
            alert('Type correct value');
        }
        else{
            alert("all good");
        }
            // alert("Hello");
            e.preventDefault();
    }
    function userHandler(e) {
        let item = e.target.value.length;
        if (item < 3) {
            // console.warn("invalid")
            setuserErr(true);
        }
        else {
            setuserErr(false);
        }
        // console.warn(e.target.value.length);
        setUser(e.target.value);
    }
    function passwordHandler(e) {
        let item = e.target.value.length;
        if (item < 8) {
            // console.warn("invalid")
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        // console.warn(e.target.value.length);
        setpassword(e.target.value);

    }
    return (
        <div> <form action="" onSubmit={loginHandle}>
            <h1>Login</h1>
            <input type="text" placeholder='Enter User Id' onChange={userHandler} />{userErr ? <span>User Not Valid</span> : ""}
            <br /> <br />
            <input type="password" placeholder='Enter Password Id' onChange={passwordHandler} />{passErr ? <span>Password Too Weak</span> : ""}
            <br /> <br />
            <button type='Submit'>Login</button>
        </form>
        </div>
    )
}
export default FormValidation;