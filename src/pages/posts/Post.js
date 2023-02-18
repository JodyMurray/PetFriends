import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Post.module.css';

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
        <div>Post</div>
    )
}

export default Post