import React from 'react';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Post.module.css';
import Avatar from "../../components/Avatar";


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
        postFeed,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={50} />
                        {owner}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {is_owner && postFeed && '...'}
                        {is_owner ? (
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>You cannot save your own post!</Tooltip>}>
                                <i class="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        ) : saved_id ? (
                            <span onClick={() => { }}>
                                <i className={`fa-solid fa-bookmark${styles.Downvote}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => { }}>
                                <i className={`fa-regular fa-bookmark${styles.DownvoteOutline}`} />
                            </span>
                        ) : (
                            <OverlayTrigger placement='top' overlay={<Tooltip>Sign in to save posts!</Tooltip>}>
                                <i class="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title classname='text-center'>{title}</Card.Title>}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.PostSection}>
                    {is_owner ? (
                        <OverlayTrigger placement="top" overlay={<Tooltip>You cannot vote your own post!</Tooltip>}>
                            <i class="fa-regular fa-thumbs-up"></i>
                        </OverlayTrigger>
                    ) : vote_id ? (
                        <span onClick={() => { }}>
                            <i className={`fa-solid fa-thumbs-up${styles.Upvote}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => { }}>
                            <i className={`fa-regular fa-thumbs-up${styles.UpvoteOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement='right' overlay={<Tooltip>Sign in to vote for posts!</Tooltip>}>
                            <i class="fa-regular fa-thumbs-up" />
                        </OverlayTrigger>
                    )}

                    {votes_count}

                    {is_owner ? (
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>You cannot vote your own post!</Tooltip>}>
                            <i class="fa-regular fa-thumbs-down" />
                        </OverlayTrigger>
                    ) : downvotes_id ? (
                        <span onClick={() => { }}>
                            <i className={`fa-solid fa-thumbs-down${styles.Downvote}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => { }}>
                            <i className={`fa-regular fa-thumbs-down${styles.DownvoteOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Sign in to vote for posts!</Tooltip>}>
                            <i class="fa-regular fa-thumbs-down" />
                        </OverlayTrigger>
                    )}
                    {downvotes_count}

                    <Link to={`/posts/${id}`}>
                        <i class="fa-regular fa-comment-dots" />
                    </Link>
                    {reply_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post