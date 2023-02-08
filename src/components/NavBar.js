import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top"><Container>
            <Navbar.Brand>
                <img src={logo} alt="logo" height="50" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link>Home <i class="fas fa-house-chimney-window" fa-bounce></i></Nav.Link>
                    <Nav.Link>Sign in <i class="fas fa-circle-right"></i></Nav.Link>
                    <Nav.Link>Sign up <i class="fas fa-square-plus"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar