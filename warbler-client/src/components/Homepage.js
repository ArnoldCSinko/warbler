import React from "react";
import { Link } from "react-router-dom";
import MessageTimeLine from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>What's happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up Here
                </Link>
            </div>
        );
    } else {
        const { username, profileImageUrl } = currentUser.user;
        return (
            <div className="container">
                <MessageTimeLine username={username} profileImageUrl={profileImageUrl}/>
            </div>
        );
    }

};

export default Homepage;