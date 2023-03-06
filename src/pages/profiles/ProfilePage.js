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
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/noresults.png";
import Post from "../posts/Post";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProfileEditDropdown } from "../../components/MoreDropdown";



function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
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
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
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
                        <Col lg={5} className="text-lg-left">
                            {currentUser &&
                                !is_owner &&
                                (profile?.following_id ? (
                                    <Button
                                        className={btnStyles.UnFollow}
                                        onClick={() => { handleUnfollow(profile) }}
                                    >
                                        unfollow
                                    </Button>
                                ) : (
                                    <Button
                                        className={`${btnStyles.Button} ${btnStyles.Follow}`}
                                        onClick={() => { handleFollow(profile) }}
                                    >
                                        follow
                                    </Button>
                                ))}
                        </Col>
                    </Row>
                </Col>
                <hr />
                {profile?.content && <Col className={`col-12 p-5 ${styles.BioContent}`}>{profile.content}</Col>}
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className={`text-center ${styles.OwnersPosts}`}>{profile?.owner}'s posts</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResults}
                    message={`No posts found, ${profile?.owner} hasn't posted anything yet!`}
                />
            )}
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
