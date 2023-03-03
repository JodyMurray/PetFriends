import React, { useEffect, useState } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const [{ data: pageProfile }] = await Promise.all([
                        axiosReq.get(`/profiles/${id}/`)
                    ])
                    setProfileData(prevState => ({
                        ...prevState,
                        pageProfile: { results: [pageProfile] }
                    }))
                    setHasLoaded(true);
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [id, setProfileData])


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

    return (
        <Row>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
            <Col className="py-2 p-0 p-lg-2 mt-5" lg={8}>
                <PopularProfiles mobile />
                <Container className={`${appStyles.Content} ${styles.ProfileContent}`}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>

        </Row>
    );
}

export default ProfilePage;
