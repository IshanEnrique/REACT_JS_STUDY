import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {


  const showThemes = props.modeColor.map((info) => {
    return (
      <li key={info.id}>
           <button className="btn btn-primary mx-2 my-1" onClick={
            ()=>{props.toggleMode(info.id)}
            }
            style={{backgroundColor: info.btnBgColor , color: info.btnTextColor}}
            >
              {info.dispName}
            </button> 
      </li>
    );
  });
  return (
    <>
    
      <nav id="nav-id"
        className={`navbar text-${props.navText} navbar-expand-lg navbar-${props.mode} `}
        style={{backgroundColor: props.navBgColor }} 
      >
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.navText}`} to="/">
            {props.nav.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.nav.navData.map((element) => {
                return (
                  <li className="nav-item" key={element.name}>
                    <Link
                      className={`nav-link text-${props.navText}`}
                      to={element.link}
                    >
                      {element.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* <div className="form-check form-switch">
              <input
                className="form-check-input mx-2"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable Dark Mode
              </label>
            </div> */}

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Theme
              </button>
              <ul className="dropdown-menu">{showThemes}</ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
};

Navbar.defaultProps = {
  title: "Your title",
  navData: [{ name: "Navbar Items", link: "#" }],
};
