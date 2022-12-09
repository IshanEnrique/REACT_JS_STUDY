import React,{useState} from 'react'
import PropTypes from 'prop-types'
 


export default function Navbar(props) {
  return (
    
    <>
    <nav className={`navbar text-${props.navText} navbar-expand-lg  bg-${props.mode}`} >
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.navText}`} href="/">{props.nav.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
         {props.nav.navData.map((element) => {
          
        return  <li className="nav-item" key={element.name}>
             <a className={`nav-link text-${props.navText}`} href={element.link}>{element.name}</a>
           </li>

         }
         
         )}
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="form-check form-switch">
        <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
      </div>
      </div>
    </div>
  </nav>
    </>
  )
}

Navbar.propTypes = {
  title  : PropTypes.string.isRequired,
  navData : PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
}

Navbar.defaultProps = {
  title : "Your title",
  navData : [{name:"Navbar Items",link:"#"}]
}