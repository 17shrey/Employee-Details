import React, { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        f_userName: "",
        f_Pwd: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const { f_userName, f_Pwd } = user;
    
        const response = await fetch("/signin", {  
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                f_userName,
                f_Pwd
            }),
        });
    
        const data = await response.json();
        if (response.status === 202) {
            window.alert(data.message);
            sessionStorage.setItem("LoginName", f_userName);
            window.location.href = "/";
        } else {
            window.alert(data.error);
        }
    };
    
    return (
        <>
            <div className='container'>

                {/* Pills navs */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="tab-login"
                            data-mdb-toggle="pill"
                            href="#pills-login"
                            role="tab"
                            aria-controls="pills-login"
                            aria-selected="true"
                        >
                            Login
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="tab-register"
                            data-mdb-toggle="pill"
                            href="#pills-register"
                            role="tab"
                            aria-controls="pills-register"
                            aria-selected="false"
                        >
                            Register
                        </a>
                    </li>
                </ul>
                {/* Pills navs */}
                {/* Pills content */}
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form onSubmit={postData}>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input type="text"
                                    id="f_userName"
                                    name='f_userName'
                                    onChange={handleInputs}
                                    value={user.f_userName} className="form-control" />
                                <label className="form-label" htmlFor="f_userName">
                                    username
                                </label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password"
                                    id="f_Pwd"
                                    name='f_Pwd'
                                    onChange={handleInputs}
                                    value={user.f_Pwd} className="form-control" />
                                <label className="form-label" htmlFor="f_Pwd">
                                    Password
                                </label>
                            </div>
                            {/* 2 column grid layout */}
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-3 mb-md-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="loginCheck"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="loginCheck">
                                            {" "}
                                            Remember me{" "}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* Simple link */}
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign in
                            </button>
                            {/* Register buttons */}
                            <div className="text-center">
                                <p>
                                    Not a member? <a href="#!">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
