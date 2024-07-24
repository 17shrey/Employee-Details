import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ObjectId } from 'mongoose';

const UpdateEmployeeForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    f_id: '',
    f_Image: '',
    f_Name: '',
    f_Email: '',
    f_Mobile: '',
    f_Designation: '',
    f_Gender: '',
    f_Course: '',
    f_Createdate: ''
  });
  const [existingEmployee, setExistingEmployee] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`/employee/${id}`);
        setExistingEmployee(response.data);
        setFormData(response.data);
      } catch (error) {
        setErrorMessage('Failed to fetch employee data');
      }
    };
    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/employee/${id}`, formData);
      
      console.log(response.data);
      window.location.href = "/showemployee"
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  if (!existingEmployee) {
    return <p>Loading...</p>;
  }

  return (

    <div className="container mt-5">
      <div className='col-12 col-md-9 col-lg-7 col-xl-5'>
        <form onSubmit={handleSubmit}>
          <div className='form-outline form-white mb-4'>
            <label for="f_id">Enter Id:</label>
            <input type="number" className='form-control form-control-md' name="f_id" value={formData.f_id} onChange={handleChange} />
          </div>

          <div className="form-outline form-white mb-4">
            <input
              type="file"
              className="form-control form-control-lg"
              id="f_Image"
              name="f_Image"
              placeholder="Add Image"
              // required="required"
              // value={formData.f_Image}
              onChange={handleChange}
            />
            <label htmlFor="f_Image" id='emptyalert'></label>
          </div><div className='form-outline form-white mb-4'>
            <label for="f_Image">
              Image URL:
              <input type="text" name="f_Image" value={formData.f_Image} onChange={handleChange} />
            </label>
          </div>

          <div className='form-outline form-white mb-4'>
            <label for="f_Name">Name:</label>

            <input type="text" className="form-control form-control-md" id="f_Name" name="f_Name" value={formData.f_Name} onChange={handleChange} />

          </div>

          <div className='form-outline form-white mb-4'>
            <label for="f_Email">Email:</label>

            <input type="text" className="form-control form-control-md" id="f_Email" name="f_Email" value={formData.f_Email} onChange={handleChange} />

          </div>

          <div className='form-outline form-white mb-4'>
            <label for="f_Mobile">Mobile:</label>

            <input type="text" className="form-control form-control-md" id="f_Mobile" name="f_Mobile" value={formData.f_Mobile} onChange={handleChange} />

          </div>

          <div className='form-outline form-white mb-4'>
            <label for="f_Designation">Designation:</label>
            <input value={formData.f_Designation}
              onChange={handleChange} className="form-control form-control-md" id="f_Designation" placeholder='Enter your Designation' list="f_Designation" name="f_Designation" />
            <datalist id="f_Designation">
              <option value="HR"></option>
              <option value="Manager"></option>
              <option value="Sales"></option>
            </datalist>
          </div>

          <div className='form-outline form-white mb-4'>
            <label><b> Gender: </b></label><br />
            <input className='mx-2' value="Male"
              onChange={handleChange} type="radio" id="f_Gender" name="f_Gender" />
            <label for="f_Gender">MALE</label>
            <input className='mx-2' value="Female"
              onChange={handleChange} type="radio" id="f_Gender" name="f_Gender" />
            <label for="f_Gender">FEMALE</label>
          </div>

          <div className='form-outline form-white mb-4'>
            <label><b>Course:</b></label><br></br>
            <input className='mx-2' value="MCA"
              onChange={handleChange} type="checkbox" id="vehicle1" name="f_Course" />
            <label htmlFor="vehicle1"> MCA</label>
            <br />
            <input className='mx-2' value="BCA"
              onChange={handleChange} type="checkbox" id="vehicle2" name="f_Course" />
            <label htmlFor="vehicle2"> BCA</label>
            <br />
            <input className='mx-2' value="BSC"
              onChange={handleChange} type="checkbox" id="vehicle3" name="f_Course" />
            <label htmlFor="vehicle3"> BSC</label>
          </div>

          {/* <div className='form-outline form-white mb-4'>
            <label for="f_Createdate">Create Date:</label>

            <input type="text" className="form-control form-control-md" name="f_Createdate" id="f_Createdate" value={formData.f_Createdate} onChange={handleChange} />

          </div> */}
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Update Employee</button>
        </form>
      </div>
    </div>

  );
};

export default UpdateEmployeeForm;
