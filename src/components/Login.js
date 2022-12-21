import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login =  () => {
    const [cred, setCred] = useState({email:"",password:""});
    let navigate= useNavigate();    

    const handleOnChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
        
    }

    const handleLoginSubmit= async (e)=>{
        e.preventDefault();
        let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_NO_AUTH_URI +
      "login";
    console.log("URL : " + url);
    let reqData = {
      email: cred.email,
      password: cred.password
    };

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reqData),
    });
    if (response.status === 200) {
      let res = await response.json();
      console.log("Login API Response : " + JSON.stringify(res));
      if (res.successCode === "00") {
        console.log("Login in the system.........");
        // Save the token and redirect
        localStorage.setItem('auth-token',res.data.authToken);
        navigate('/');

      }
    }
    }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={cred.email}
            required
            onChange={handleOnChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={cred.password}
            required
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
