import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";


const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        reply_count,
        votes_count,
        downvotes_count,
        vote_id,
        saved_id,
        saved_count,
        downvotes_id,
        title,
        content,
        image,
        updated_at,
        postsFeed,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/votes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, votes_count: post.votes_count + 1, vote_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleDownvote = async () => {
        try {
            const { data } = await axiosRes.post("/downvotes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, downvotes_count: post.downvotes_count + 1, downvote_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/votes/${vote_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, votes_count: post.votes_count - 1, vote_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/ ${profile_id}`}>
                        <Avatar src={profile_image} height={50} />
                        {owner}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {is_owner && postsFeed && '...'}
                        {is_owner ? (
                            <OverlayTrigger placement="top" overlay={<Tooltip>You cannot save your own post!</Tooltip>}>
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        ) : saved_id ? (
                            <span onClick={() => { }}>
                                <i className={`fa-solid fa-bookmark ${styles.Bookmark}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => { }}>
                                <i className={`fa-regular fa-bookmark ${styles.BookmarkOutline}`} />
                            </span>
                        ) : (
                            <OverlayTrigger placement='top' overlay={<Tooltip>Sign in to save posts!</Tooltip>}>
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title className='text-center'>{title}</Card.Title>}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.PostSection}>

                    {is_owner ? (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>You can't vote for your own post!</Tooltip>}
                        >
                            <i className="far fa-thumbs-up" />
                        </OverlayTrigger>
                    ) : vote_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-thumbs-up ${styles.Upvote}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-thumbs-up ${styles.UpvoteOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Sign in to vote for posts!</Tooltip>}
                        >
                            <i className="far fa-thumbs-up" />
                        </OverlayTrigger>
                    )}
                    {votes_count}
                    {is_owner ? (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>You cannot vote for your own post!</Tooltip>}
                        >
                            <i className="far fa-thumbs-down" />
                        </OverlayTrigger>
                    ) : downvotes_id ? (
                        <span onClick={() => { }}>
                            <i className={`fas fa-thumbs-down ${styles.Downvote}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleDownvote}>
                            <i className={`far fa-thumbs-down ${styles.DownvoteOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Sign in to vote for posts!</Tooltip>}
                        >
                            <i className="far fa-thumbs-down" />
                        </OverlayTrigger>
                    )}
                    {downvotes_count}

                    <Link to={`/posts/ ${id}`}>
                        <i className="far fa-comment-dots" />
                    </Link>
                    {reply_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;