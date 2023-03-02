import React, { useState } from "react";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
}

useEffect(() => {
    setHasLoaded(true);
}, [])


export default ProfilePage;
