import React, { useState } from 'react';

function Createemployee() {
    const [image, setImage] = useState(null);

    const [create, setCreate] = useState({
        f_id: "",
        f_Image: "",
        f_Name: "",
        f_Email: "",
        f_Mobile: "",
        f_Designation: "",
        f_Gender: "",
        f_Course: "",
        f_Createdate: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setCreate({ ...create, [name]: value });

        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const postData = async (e) => {
        e.preventDefault();

        if (!image) {
            window.alert("Please select an image");
            return;
        }

        var { f_id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = create;

        const rest = await fetch("/employeesave", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                f_id,
                f_Image,
                f_Name,
                f_Email,
                f_Mobile,
                f_Designation,
                f_Gender,
                f_Course,
            })
        });

        const data = await rest.json();
        if (data.status === 202) {
            window.alert(data.message)
        } else {
            window.alert("product saved Successfully");

            const formData = new FormData();
            formData.append("image", image);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log(data);
            window.location.href = "/showemployee"

        }
    };

    return (
        <div>
            <div className="mask d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center my-5 h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: 20 }}>
                                <form autoComplete='off'>
                                    <div className="card-body p-5">
                                        <center>
                                            <h2 className="fw-bold mb-5 text-uppercase">
                                                Add Employee Details
                                            </h2>
                                        </center>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                id="f_id"
                                                name="f_id"
                                                placeholder="serial no"
                                                required="required"
                                                value={create.f_id}
                                                onChange={handleInputs}
                                            />
                                            <label htmlFor="f_id" id='emptyalert'></label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="file"
                                                className="form-control form-control-lg"
                                                id="f_Image"
                                                name="f_Image"
                                                placeholder="Add Image"
                                                required="required"
                                                value={create.f_Image}
                                                onChange={handleInputs}
                                            />
                                            <label htmlFor="f_Image" id='emptyalert'></label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="f_Name"
                                                name="f_Name"
                                                placeholder="Enter Your Name"
                                                required="required"
                                                value={create.f_Name}
                                                onChange={handleInputs}
                                            />
                                            <label htmlFor="f_Name" id='emptyalert1'></label>
                                            <label htmlFor="email" id='emailalert'></label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="Email"
                                                className="form-control form-control-lg"
                                                id="f_Email"
                                                name="f_Email"
                                                placeholder="Enter Your Email"
                                                required="required"
                                                value={create.f_Email}
                                                onChange={handleInputs}
                                            />
                                            <label htmlFor="f_Email" id='emptyalert2'></label>
                                        </div>


                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                id="f_Mobile"
                                                name="f_Mobile"
                                                placeholder="Enter Your Number"
                                                required="required"
                                                value={create.f_Mobile}
                                                onChange={handleInputs}
                                            />
                                            <label htmlFor="f_Mobile" id='emptyalert3'></label>
                                        </div>

                                        <div className='form-outline form-white mb-4'>

                                            <input value={create.f_Designation}
                                                onChange={handleInputs} className="form-control form-control-lg" placeholder='Enter your Designation' list="f_Designation" name="f_Designation" />
                                            <datalist id="f_Designation">
                                                <option value="HR"></option>
                                                <option value="Manager"></option>
                                                <option value="Sales"></option>
                                            </datalist>
                                        </div>

                                        <div className='form-outline form-white mb-4'>
                                            <label><b>Course:</b></label><br></br>
                                            <input className='mx-2' value="MCA"
                                                onChange={handleInputs} type="checkbox" id="vehicle1" name="f_Course"  />
                                            <label htmlFor="vehicle1"> MCA</label>
                                            <br />
                                            <input className='mx-2' value="BCA"
                                                onChange={handleInputs} type="checkbox" id="vehicle2" name="f_Course"  />
                                            <label htmlFor="vehicle2"> BCA</label>
                                            <br />
                                            <input className='mx-2' value="BSC"
                                                onChange={handleInputs} type="checkbox" id="vehicle3" name="f_Course"  />
                                            <label htmlFor="vehicle3"> BSC</label>
                                        </div>

                                        <div className='form-outline form-white mb-4'>
                                            <label><b> Gender: </b></label><br />
                                            <input className='mx-2' value="Male"
                                                onChange={handleInputs} type="radio" id="f_Gender" name="f_Gender"  />
                                            <label for="f_Gender">MALE</label>
                                            <input className='mx-2' value="Female"
                                                onChange={handleInputs} type="radio" id="f_Gender" name="f_Gender"  />
                                            <label for="f_Gender">FEMALE</label>
                                        </div>

                                        <div className="d-flex justify-content-center mt-3">
                                            <input
                                                type="submit"
                                                className="btn btn-outline-light btn-lg px-6"
                                                defaultValue="Sign Up"
                                                onClick={postData}
                                            />
                                        </div>
                                        <p className="text-center text-white mt-2 mb-0">
                                            You have already register?{" "}
                                            <a href="/showemployee" className="fw-bold">
                                                <u>Click here</u>
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
    );
}

export default Createemployee;
