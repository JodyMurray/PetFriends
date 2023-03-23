import React from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";
import styles from "../../styles/PopularProfiles.module.css";



const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container className={`${appStyles.Content} ${styles.ProfilesContent} mt-4 ${mobile && 'd-lg-none text-center mb-4'}`}>
            {popularProfiles.results.length ? (
                <>
                    <p>Recommended Users to follow
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Sign in to follow other users!</Tooltip>}
                        >
                            <Link to="/signin">
                                <i className="fa-regular fa-circle-down" />
                            </Link>
                        </OverlayTrigger>
                    </p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularProfiles.results.slice(0, 3).map((profile) => (
                                <Profile key={profile.id} profile={profile} mobile />
                            ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularProfiles;