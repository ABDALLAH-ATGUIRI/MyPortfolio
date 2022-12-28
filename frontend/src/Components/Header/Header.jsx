import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HomeRounded, Telegram } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import "./Header.css"
function Header(props) {
  const pathName = props?.location?.pathname
  return (
    <>
      <Router>
        <Navbar expand="lg" sticky="top" className='header'>
          {/* Home link */}
          <Nav.Link as={Link} to="/" className='header_navLink'>
            <Navbar.Brand className="header_home">
              <HomeRounded />
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className='header_left'>
              {/* Resume Link */}
              <Nav.Link as={Link} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}>
                Resume
              </Nav.Link>

              {/* portfolio Link */}
              <Nav.Link as={Link} to="/portfolio" className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                portfolio
              </Nav.Link>
            </Nav>
            <div className='header_right'>
              {
                Object.keys(resumeData.socials).map(key => (
                  <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
                ))
              }
              <CustomButton text={"Hire Me"} icon={<Telegram />} />
            </div>

          </Navbar.Collapse>
        </Navbar>
      </Router>

    </>
  )
}

export default Header