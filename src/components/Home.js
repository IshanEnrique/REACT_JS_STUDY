import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";

const Home = () => {
  const navigate=useNavigate();

  useEffect(() => {
    if(! localStorage.getItem("auth-token")){
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Notes />
    </>
  );
};

export default Home;
