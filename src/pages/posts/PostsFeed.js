import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsFeed.module.css";
import NoResults from "../../assets/noresults.png";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Post from "./Post";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { Link } from "react-router-dom";

function PostsFeed({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();
    const [query, setQuery] = useState("");

    const newPostIcon = (
        <Link to="/posts/create"
            className={styles.NavLink}>Add post
            <i class="fa-regular fa-square-plus"></i>
        </Link>
    )

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);


    return (
        <Row className="h-100">
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />

                <i className={`fas fa-search ${styles.SearchIcon}`} />
                <Form className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}>
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-4"
                        placeholder="Search" />
                </Form>
                <span className={`d-flex justify-content-center ${styles.NewPostIcon}`}>{currentUser && newPostIcon}</span>

                {hasLoaded ? (
                    <>
                        {posts.results.length ? (
                            <InfiniteScroll
                                children={
                                    posts.results.map(post => (
                                        <Post key={post.id} {...post} setPosts={setPosts} />
                                    ))
                                }
                                dataLength={posts.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!posts.next}
                                next={() => fetchMoreData(posts, setPosts)}
                            />
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default PostsFeed;