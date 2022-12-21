import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from '../context/alert/alertContext';
const Signup = () => {
  const context = useContext(alertContext);
  const {showAlert}=context;
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  let navigate = useNavigate();

  let { name, email, mobile, password } = profile;
  const handleOnChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_NO_AUTH_URI +
      "create-user";
    console.log("URL : " + url);
    let reqData = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    let res = await response.json();
    if (response.status === 200) {
      console.log("Create Profile API Response : " + JSON.stringify(res));
      if (res.successCode === "00") {
        console.log("Created Profile in the system.........");
        // Save the token and redirect
        // localStorage.setItem("auth-token", res.data.authToken);
        navigate("/");
        showAlert(res.successMessage,"success");
      }else{
        showAlert(res.error.errorMessage,"danger");
      }
    }else{
      showAlert(res.error.errorMessage,"danger");
    }
  };

  return (
    <div className="container">
       <h2>Signup to use iNotebook</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"> Email address </label>
          <input  type="email" className="form-control" id="email"  name="email"  value={profile.email} required onChange={handleOnChange} aria-describedby="emailHelp"  />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number  </label>
          <input  type="text" className="form-control" id="mobile"  name="mobile"  value={profile.mobile} required onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name  </label>
          <input  type="text" className="form-control" id="name"  name="name"  value={profile.name} required
            onChange={handleOnChange}  />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"> Password </label>
          <input type="password" className="form-control" id="password" name="password" value={profile.password} required onChange={handleOnChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
