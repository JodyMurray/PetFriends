import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";




const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();


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
        <NavLink
            to="/pawfeed"
            activeClassName={styles.Active}
            className={styles.NavLink}>PawFeed
            <i class="fa-solid fa-paw"></i>
        </NavLink>
        <NavLink
            to="/saved"
            className={styles.NavLink}
            activeClassName={styles.Active}>Saved
            <i class="fa-solid fa-bookmark"></i>
        </NavLink>
        <NavLink className={styles.NavLink}
            to="/"
            onClick={handleSignOut}>
            Sign out
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </NavLink>

        <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
            className={`${styles.NavLink} ${styles.Pawfile}`}>
            <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
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
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/home">
                    <Navbar.Brand className={styles.NavLink}>
                        <img src={logo} alt="logo" height="50" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && newPostIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="responsive-navbar-nav"
                    className='navbarToggle' />
                <Navbar.Collapse id="responsive-navbar-nav" >

                    <Nav className="my-auto text-center">
                        <NavLink to="/home"
                            className={styles.NavLink}
                            activeClassName={styles.Active}>Home
                            <i class="fa-solid fa-house-chimney"></i>
                        </NavLink>
                        <NavLink to="/about"
                            className={styles.NavLink}
                            activeClassName={styles.Active}>About
                            <i class="fa-regular fa-circle-question">
                            </i>
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar