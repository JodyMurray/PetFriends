import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const newPostIcon = (
        <NavLink to="/posts/create"
            className={styles.NavLink}
            activeClassName={styles.Active}>
            <i class="fa-regular fa-square-plus"></i>
        </NavLink>
    )
    const loggedInIcons = <>
        <NavLink to="/pawfeed"
            className={styles.NavLink}>PawFeed
            <i class="fa-solid fa-paw"></i>
        </NavLink>
        <NavLink to="/saved"
            className={styles.NavLink}>Saved
            <i class="fa-solid fa-bookmark"></i>
        </NavLink>
        <NavLink to="/"
            onClick={() => { }}
            className={styles.NavLink}>Sign out

            <i class="fa-solid fa-door-open"></i>
        </NavLink>
        <NavLink to={`/profiles/${currentUser?.profile_id}`}
            className={styles.NavLink}>
            <img src={currentUser?.profile_image} />

            <i class="fa-solid fa-door-open"></i>
        </NavLink>

    </>
    const loggedOutIcons = (
        <>
            <NavLink to="/signin"
                className={styles.NavLink}
                activeClassName={styles.Active}>Sign in
                <i class="fas fa-circle-right"></i>
            </NavLink>
            <NavLink to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}>Sign up
                <i class="fas fa-square-plus">
                </i>
            </NavLink>
        </>
    );
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
                        <NavLink exact to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}>Home
                            <i class="fas fa-house-chimney-window" >
                            </i>
                        </NavLink>
                        <NavLink to="/about"
                            className={styles.NavLink}
                            activeClassName={styles.Active}>About
                            <i class="fa-regular fa-circle-question">
                            </i>
                        </NavLink>

                    </Nav>

                </Navbar.Collapse>
                {currentUser && newPostIcon}
                {currentUser ? loggedInIcons : loggedOutIcons}
            </Container>
        </Navbar>
    )
}

export default NavBar