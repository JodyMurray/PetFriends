import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='navbarToggle' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto">
                        <Nav.Link className={styles.NavLink}>Home <i class="fas fa-house-chimney-window" ></i></Nav.Link>
                        <Nav.Link className={styles.NavLink}>Sign in <i class="fas fa-circle-right"></i></Nav.Link>
                        <Nav.Link className={styles.NavLink}>Sign up <i class="fas fa-square-plus"></i></Nav.Link>
                        <Nav.Link className={styles.NavLink}>About <i class="fa-regular fa-circle-question"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar