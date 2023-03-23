import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import ReplyCreateForm from "../replies/ReplyCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Reply from "../replies/Reply";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";


function PostFeed() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [replies, setReplies] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }, { data: replies }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    axiosReq.get(`/reply/?post=${id}`),
                ]);
                setPost({ results: [post] });
                setReplies(replies);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col lg={4} className={`d-none d-lg-block p-0 p-lg-2 ${appStyles.ProfileContent2}`}>
                <PopularProfiles />
            </Col>
            <Col className={`py-2 p-0 p-lg-2 ${appStyles.Post2}`} lg={8}>
                <PopularProfiles mobile />
                <Post {...post.results[0]} setPosts={setPost} postFeed />
                <Container className={`mb-3 ${appStyles.Content}`}>
                    {currentUser ? (
                        <ReplyCreateForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            post={id}
                            setPost={setPost}
                            setReplies={setReplies}
                        />
                    ) : replies.results.length ? (
                        "Replies"
                    ) : null}

                    {replies.results.length ? (
                        <InfiniteScroll
                            children={replies.results.map((reply) => (
                                <Reply
                                    key={reply.id}
                                    {...reply}
                                    setPost={setPost}
                                    setReplies={setReplies}
                                />
                            ))}
                            dataLength={replies.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!replies.next}
                            next={() => fetchMoreData(replies, setReplies)}
                        />
                    ) : currentUser ? (
                        <span className={`py-2 p-0 p-lg-4 d-flex justify-content-center ${appStyles.CommentContainer}`}>Nothing yet! Be the first to say something!</span>
                    ) : (
                        <span className={`py-2 p-0 p-lg-4 d-flex justify-content-center ${appStyles.CommentContainer}`}>Nothing yet!</span>
                    )}
                </Container>
            </Col>
        </Row >
    );
}

export default PostFeed;