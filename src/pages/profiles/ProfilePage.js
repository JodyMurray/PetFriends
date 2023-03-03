import React, { useEffect, useState } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}/`),
                        axiosReq.get(`/posts/?owner__profile=${id}`),
                    ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">

                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}

                    />
                    <h3 className="mr-5 d-flex justify-content-center">{profile?.owner}</h3>

                </Col>
                <Col lg={8}>

                    <Row className="justify-content-center no-gutters">
                        <Col xs={4} className='my-5'>
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                        <Col xs={4} className='my-5'>
                            <div>{profile?.followers_count}</div>
                            <div>followers</div>
                        </Col>
                        <Col xs={4} className='my-5'>
                            <div>{profile?.following_count}</div>
                            <div>following</div>
                        </Col>
                        <Col lg={3} className="text-lg-right">
                            {currentUser &&
                                !is_owner &&
                                (profile?.following_id ? (
                                    <Button
                                        className={`${btnStyles.Button} ${btnStyles.Light}`}
                                        onClick={() => { }}
                                    >
                                        unfollow
                                    </Button>
                                ) : (
                                    <Button
                                        className={`${btnStyles.Button} ${btnStyles.Follow}`}
                                        onClick={() => { }}
                                    >
                                        follow
                                    </Button>
                                ))}
                        </Col>
                    </Row>
                </Col>
                <hr />
                {profile?.content && <Col className="col-12 p-5">{profile.content}</Col>}
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
