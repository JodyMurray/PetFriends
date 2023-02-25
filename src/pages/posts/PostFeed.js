import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import CommentCreateForm from "../replies/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostFeed() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [replies, setReplies] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ]);
                setPost({ results: [post] });
                console.log(post);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                placeholder
            </Col>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Profiles</p>
                <Post {...post.results[0]} setPosts={setPost} postFeed />
                <Container className={`${appStyles.Content}`}>
                    {currentUser ? (
                        <CommentCreateForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            post={id}
                            setPost={setPost}
                            setReplies={setReplies}
                        />
                    ) : replies.results.length ? (
                        "Comments"
                    ) : null}
                </Container>
            </Col>
        </Row>
    );
}

export default PostFeed;