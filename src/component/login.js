import React, { useState } from "react";
//import "./login.css"
//if u use login css u cant see logout items for now
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">

            <form className="login_form">
                <h1>login here</h1>
                <input type="name" placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="Submit" className="submit_btn">
                submit buddy
                </button>
            </form>

        </div>
    );
};
export default Login; 