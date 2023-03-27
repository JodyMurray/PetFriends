import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from '../utils/utils';



const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const checkActive = (match, location) => {
        if (!location) return false;
        const { pathname } = location;
        return pathname === "/";
    }


    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    const loggedInIcons = <>
        <NavLink
            to="/pawfeed"
            activeClassName={styles.Active}
            className={styles.NavLink}>
            <i className="fa-solid fa-paw"></i>
            PawFeed

        </NavLink>
        <NavLink
            to="/saved"
            className={styles.NavLink}
            activeClassName={styles.Active}>
            <i className="fa-solid fa-bookmark"></i>
            Saved

        </NavLink>
        <NavLink className={styles.NavLink}
            to="/"
            onClick={handleSignOut}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Sign out
        </NavLink>

        <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
            className={`${styles.NavLink} ${styles.Pawfile}`}>
            <Avatar text={currentUser?.username} src={currentUser?.profile_image} height={40} alt="avatar"/>
        </NavLink>


    </>
    const loggedOutIcons = (
        <>
            <NavLink to="/about"
                className={styles.NavLink}
                activeClassName={styles.Active}>
                <i className="fa-regular fa-circle-question">
                </i>
                About
            </NavLink>
            <NavLink to="/signin"
                className={styles.NavLink}
                activeClassName={styles.Active}>
                <i className="fas fa-circle-right"></i>
                Sign in
            </NavLink>
            <NavLink to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}>
                <i className="fas fa-square-plus">
                </i>
                Sign up
            </NavLink>
        </>
    );
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">

                    <Navbar.Brand className={`${styles.NavLink} ${styles.NavLogo}`}>
                        <img src={logo} alt="logo" height="50" />

                    </Navbar.Brand>

                </NavLink>

                <Navbar.Toggle

                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                    className='navbarToggle'
                />

                <Navbar.Collapse id="basic-navbar-nav"
                    className='mr-auto flex-column text-center'>


                    <Nav className="me-auto">
                        <NavLink to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active} isActive={checkActive}>
                            <i className="fa-solid fa-house-chimney"></i>
                            Home

                        </NavLink>


                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar