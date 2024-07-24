import React, { useEffect } from 'react'

function Home() {
  useEffect(() => {
    Authenticate();
  }, []);


  const Authenticate = async (e) => {
    const isuserLoggedIn = sessionStorage.getItem("LoginName");
    if (isuserLoggedIn == null) {
      window.location.href = "/login";
    }
  };

  const SignOut = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DealsDray
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/showemployee"
                >
                  Employee List
                </a>

              </li>


              <li className="nav-item">
                <a className="nav-link active" href="/createemployee">

                  Add Employee
                </a>
              </li>
              

            </ul>
            <a className="nav-link" >
              Hello... {sessionStorage.getItem("LoginName")}
            </a>
            <div className='mx-2'>
            <a>

              <button className="btn btn-danger" type="submit" onClick={SignOut} href="/logout">
                Logout
              </button>
            </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Home
