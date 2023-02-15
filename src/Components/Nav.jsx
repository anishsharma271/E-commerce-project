import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./Style.css";
import { logoutAction } from "../Redux/userSlice";

const Nav = () => {
  const dispatch = useDispatch();
  //  const loginStatus = useSelector((value) => value.userSlice.loginStatus);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogOut = () => {
    
    localStorage.removeItem("token");
    setShow(false);
    dispatch(logoutAction(false))
    // setloginStatus(false)
  };

  useEffect(()=>{
    console.log("aaa");
  },[localStorage.getItem("token")])

  //  console.log("navvvv", loginStatus);
 

 

  const clicktoChange = ({ isActive }) => {
    return {
      color: isActive ? "palevioletred" : "black",
      backgroundColor: isActive ? "" : "",
      textDecoration: isActive ? "none" : "none",
      borderBottom: isActive ? "1px solid palevioletred " : "",
      fontSize: isActive ? "22px" : "20px",
      fontWeight: isActive ? "bold" : "",
    };
  };
  // console.log("selector", selector.userSlice.token);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  nav">
        <h2 className="logo">A&S</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to="/" style={clicktoChange}>
                Home
              </NavLink>
            </li>
            <li className="nav-item active mx-3">
              <NavLink to="/blog" style={clicktoChange}>
                Blog
              </NavLink>
            </li>
            {/* <li className="nav-item active mx-3">
       <NavLink to='/accessories'>Accessories</NavLink>
      </li> */}
            <li className="nav-item dropdown">
              <NavLink
                // className="nav-link dropdown-toggle"
                to="/categories"
                style={clicktoChange}
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/outfits">
                  Outfits
                </NavLink>
                <NavLink className="dropdown-item" to="/accessories">
                  Accessories
                </NavLink>
              </div>
            </li>
          </ul>
        

          <form className="form-inline my-2 my-lg-0">
            {localStorage.getItem("token") ? (
              <Button variant="primary" onClick={handleShow}>
                Logout
              </Button>
            ) : <NavLink to="/login">
                <button className="btn btn-info  text-white me-5">Login</button>
              </NavLink>
            }
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleLogOut}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
