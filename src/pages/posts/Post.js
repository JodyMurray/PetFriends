import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
        downvote_id,
        title,
        content,
        image,
        updated_at,
        postFeed,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_user = currentUser?.username;
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit/`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

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

    const handleSave = async () => {
        try {
            const { data } = await axiosRes.post("/saved/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, saved_id: data.id }
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

    const handleUnsave = async () => {
        try {
            await axiosRes.delete(`/saved/${saved_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, saved_count: post.saved_count - 1, saved_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUndownvote = async () => {
        try {
            await axiosRes.delete(`/downvotes/${downvote_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, downvotes_count: post.downvotes_count - 1, downvote_id: null }
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
                <Media className={'align-items-center justify-content-between'}>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={50} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner ? (
                            <OverlayTrigger placement="top" overlay={<Tooltip>You cannot save your own post!</Tooltip>}>
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        ) : saved_id ? (
                            <span onClick={handleUnsave}>
                                <i className={`fa-solid fa-bookmark ${styles.Bookmark}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleSave}>
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
                <Card.Img src={image} height={450} width={350} alt={title} className={styles.PostImage} />
            </Link>

            {is_owner && postFeed &&
                <MoreDropdown handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

            }
            <Card.Body>
                {title && <Card.Title className='text-center'>{title}</Card.Title>}
                {content && <Card.Text>{content}</Card.Text>}

                <div className={styles.PostSection}>

                    {is_owner ? (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>You cannot vote for your own post!</Tooltip>}
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
                    ) : downvote_id ? (
                        <span onClick={handleUndownvote}>
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

                    {is_user ? (
                        <Link to={`/posts/${id}`} aria-label="comment">
                            <i className="far fa-comment-dots" /></Link>
                    ) : currentUser ? (
                        <span>
                            <i className="far fa-comment-dots" />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Sign in to comment on posts!</Tooltip>}
                        ><Link to ="/signin" >
                            <i className="far fa-comment-dots" /></Link>
                        </OverlayTrigger>

                    )}
                    {reply_count}
                </div>

            </Card.Body>


        </Card>
    );
};

export default Post;