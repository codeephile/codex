import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  //Handle scroll event to change the navbar background
  const handleScroll = () =>{
    if(window.scrollY > 50){
        setIsScrolled(true);
    } else{
        setIsScrolled(false);
    }
  };

  //add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return() =>{
        window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <nav className={ `navbar navbar-expand-lg navbar-dark
         bg-transparent${
            isScrolled ? "bg-dark" : ""}
            fixed-top transition-all`}
        >
      <div className="container">
        <a className="navbar-brand" href="#"
            style={{ color: '#62A0DF', fontWeight: '600' , 
                fontSize: '1.7rem'}}>
          CODEX
        </a>
        <button
          className="navbar-toggler 
                    shadow-none border-0"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasNavbar"
          aria-expanded={isOffcanvasOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`sidebar offcanvas offcanvas-start ${isOffcanvasOpen ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              CODEX
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              onClick={toggleOffcanvas}
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-log-0">
            <ul className="navbar-nav justify-content-center 
                align-items-center fss-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/product">
                  Products
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#update">
                  Contact
                </a>
              </li>
            </ul>
            { /* login and sign up */}
            <div className="d-flex flex-column flex-lg-row justify-content-center
                align-items-center gap-3">
                <a href="/login" 
                    className="text-white text-decoration-none 
                    px-3 py-1 rounded-4"
                    style={{ backgroundColor: '	#d41616' }}>Log In</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
