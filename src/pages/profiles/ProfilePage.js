import React, { useState } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
}

useEffect(() => {
    setHasLoaded(true);
}, [])


const mainProfile = (
    <>
        <Row noGutters className="px-3 text-center">
            <Col lg={3} className="text-lg-left">
                <p>Image</p>
            </Col>
            <Col lg={6}>
                <h3 className="m-2">Username</h3>
                <p>Stats</p>
            </Col>
            <Col lg={3} className="text-lg-right">
                <p>Follow button</p>
            </Col>
            <Col className="p-3">Content</Col>
        </Row>
    </>
);

const mainProfilePosts = (
    <>
        <hr />
        <p className="text-center">Your posts</p>
        <hr />
    </>
);

export default ProfilePage;
