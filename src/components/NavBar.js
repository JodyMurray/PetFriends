import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };
    const newPostIcon = (
        <NavLink to="/posts/create"
            className={styles.NavLink}>
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
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign out
        </NavLink>


        <NavLink to={`/profiles/${currentUser?.profile_id}`}
            className={styles.NavLink}>
            <Avatar src={currentUser?.profile_image} text='Pawfile' height={40} />
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