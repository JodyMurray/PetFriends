import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.NavLink}>
                        <img src={logo} alt="logo" height="50" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbarToggle' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="my-auto">
                        <NavLink to="/" className={styles.NavLink}>Home <i class="fas fa-house-chimney-window" ></i></NavLink>
                        <NavLink to="/signin" className={styles.NavLink}>Sign in <i class="fas fa-circle-right"></i></NavLink>
                        <NavLink to="/signup" className={styles.NavLink}>Sign up <i class="fas fa-square-plus"></i></NavLink>
                        <NavLink to="/about" className={styles.NavLink}>About <i class="fa-regular fa-circle-question"></i></NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar