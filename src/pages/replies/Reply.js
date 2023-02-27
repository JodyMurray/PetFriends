import React from 'react';
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from "../../components/Avatar";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Reply.module.css';


const Reply = (props) => {
    const {
        profile_id,
        profile_image,
        owner, updated_at,
        content,
        id,
        setPost,
        setReplies } = props;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/reply/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        replies_count: prevPost.results[0].replies_count - 1,
                    },
                ],
            }));

            setReplies((prevReplies) => ({
                ...prevReplies,
                results: prevReplies.results.filter((reply) => reply.id !== id),
            }));
        } catch (err) { }
    };

    return (
        <div>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>

                {is_owner && (
                    <MoreDropdown handleEdit={() => { }} handleDelete={handleDelete} />
                )}
            </Media>
        </div>
    );
};


export default Reply