import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";



const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container className={`${appStyles.Content} ${appStyles.ProfilesContent} mt-4 ${mobile && 'd-lg-none text-center mb-4'}`}>
            {popularProfiles.results.length ? (
                <>
                    <p>Recommended Users to follow <i className="fa-regular fa-circle-down"></i></p>
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