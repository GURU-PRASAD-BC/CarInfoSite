import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import jwt_decode from "jwt-decode";

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/about",
    display: "ABOUT",
  },
  {
    path: "/cars",
    display: "MODELS",
  },
  {
    path: "/blogs",
    display: "BLOG",
  },
  {
    path: "https://www.mycarhelpline.com/index.php?option=com_forms&view=pages&layout=tamilnadu&Itemid=504",
    display: "ON-ROAD PRICE",
  },
  {
    path: "https://www.cardekho.com/compare-cars",
    display: "COMPARE",
  },
  {
    path: "/contact",
    display: "SUPPORT & SERVICES",
  },
  {
    path: "/login",
  },
  {
    path: "/signup",
  },
  {
    path: "/Details",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [userName, setUserName] = useState(""); 

  const fetchUserName = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setUserName(decodedToken.fname);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      {/* Header top */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91-97917 66226
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {!userName ? (
                  <React.Fragment>
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="ri-login-circle-line"></i>Login
                    </Link>

                    <Link
                      to="/signup"
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="ri-user-line"></i>Register
                    </Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="user-name">
                      Welcome, {userName}
                    </div>
                    <Link
                      to="/home"
                      className="d-flex align-items-center gap-2"
                      onClick={handleLogout}
                    >
                      <i className="ri-logout-circle-line"></i>Logout
                    </Link>
                    <Link to="/Details" className="d-flex align-items-center gap-2">
                      <i className="ri-database-2-line"></i>Details
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Header middle */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>GP CARS</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>TamilNadu</h4>
                  <h6>Erode City,Perundurai Road</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>9am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main navigation */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
