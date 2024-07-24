import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Showemployee() {
  const [show, setShow] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    fetchemployee();
  }, [])

  const fetchemployee = async () => {
    try {
      const response = await fetch("/showemployee")
      const data = await response.json();
      setShow(data);
    } catch (err) {
      console.log(err)
    }
  }

  const deleteData = async (id) => {
    try{
      const response=await fetch("/employee/"+id,{
        method:"delete"
      });
      window.alert("Are you sure you want to delete.")
      console.log(response.data);
      if(response.status === 422){
        console.log(response.message)
        window.alert(response.message)
      }else{
        console.log(response.message)
        window.location.href="/showemployee"
      }
    }catch(err){
      console.log(err)
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleDateSearch = (event) => {
    setSearchDate(event.target.value);
  }

  const filteredEmployees = show.filter((employee) => {
    const nameMatch = employee.f_Name.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = new Date(employee.f_Createdate).toLocaleDateString() === new Date(searchDate).toLocaleDateString();

    if (searchTerm && searchDate) {
      return nameMatch && dateMatch;
    } else if (searchTerm) {
      return nameMatch;
    } else if (searchDate) {
      return dateMatch;
    } else {
      return true;
    }
  });

  return (
    <div>
      <div className="employee-count">
        Total Employees: {show.length}
      </div>
      
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9">
          <center>
            <h1>Employee's List</h1>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <input
              type="date"
              value={searchDate}
              onChange={handleDateSearch}
            />
          </center>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Designation</th>
                <th scope="col">Gender</th>
                <th scope="col">Course</th>
                <th scope="col">Create Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((s) => {
                return (
                  <tr key={s._id}>
                    <td>{s.f_id}</td>
                    <td><img
                      style={{ width: "", height: 70 }}
                      src={s.f_Image}
                      alt="loading"
                      className="img-fluid"
                    /></td>
                    <td>{s.f_Name}</td>
                    <td>{s.f_Email}</td>
                    <td>{s.f_Mobile}</td>
                    <td>{s.f_Designation}</td>
                    <td>{s.f_Gender}</td>
                    <td>{s.f_Course}</td>
                    <td>{new Date(s.f_Createdate).toLocaleDateString()}</td>
                    <td>
                      <Link
                        to={`/update/${s._id}`}
                        className="btn btn-warning">
                        Update
                      </Link>
                      <input
                        type="submit"
                        onClick={() => deleteData(s._id)}
                        value="Delete"
                        id={s._id}
                        className="btn btn-danger btn-sm btn-block"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Showemployee
