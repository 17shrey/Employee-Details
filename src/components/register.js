
import React, { useState } from 'react'

function Register() {
    const [register,setRegister]=useState({
        f_sno:"",
        f_userName:"",
        f_Pwd:""
    });

    let name, value;
    const handleInputs= (e) =>{
        name= e.target.name;
        value=e.target.value;
        console.log(e)

        setRegister({...register,[name]:value})
    }

    const postData = async (e)=>{
        e.preventDefault();
        const {f_sno,f_userName,f_Pwd}=register;
        const rest = await fetch("/signup",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                f_sno,f_userName,f_Pwd
            })
        });

        const data= await rest.json();
        if(rest.status === 422){
            console.log(data.error)
            window.alert(data.error)
        }else{
            console.log(data.success)
            window.alert(data.success)
            window.location.href="/"
        }
    }
    return (

        
        <>
            <div>

                <div className="mask d-flex align-items-center">
                    <div className="container ">
                        <div className="row d-flex justify-content-center align-items-center my-5 h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-5">
                                <div className="card bg-dark text-white" style={{ borderRadius: 20 }}>
                                    <form>
                                        <div className="card-body p-5">
                                            <center>
                                                <h2 className="fw-bold mb-5 text-uppercase">
                                                    Create an account
                                                </h2>
                                            </center>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="number"
                                                    className="form-control form-control-lg"
                                                    id="f_sno"
                                                    name="f_sno"
                                                    placeholder="Id no"
                                                    required="required"
                                                    value={register.f_sno}
                                                    onChange={handleInputs}
                                                />
                                                <lable for="f_sno" id='emptyalert'> </lable>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="f_userName"
                                                    name="f_userName"
                                                    placeholder="Create a Username"
                                                    required="required"
                                                    value={register.f_userName}
                                                    onChange={handleInputs}
                                                />
                                                <lable for="f_userName" id='emptyalert1'> </lable>
                                                <lable for="f_userName" id='emailalert'> </lable>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    id="f_Pwd"
                                                    name="f_Pwd"
                                                    placeholder="Enter Your password"
                                                    required="required"
                                                    value={register.f_Pwd}
                                                    onChange={handleInputs}
                                                />
                                                <lable for="f_Pwd" id='emptyalert2'> </lable>
                                            </div>

                                            <div className="d-flex justify-content-center mt-5">
                                                <input
                                                    type="submit"
                                                    className="btn btn-outline-light btn-lg px-6"
                                                    defaultValue="Sign Up"
                                                    onClick={postData}
                                                />
                                            </div>
                                            <p className="text-center text-white mt-2 mb-0">
                                                Have already an account?{" "}
                                                <a href="/login" className="fw-bold">
                                                    <u>Login here</u>
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register

