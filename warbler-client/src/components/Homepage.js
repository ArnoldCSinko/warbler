import React from "react";
import { Link } from "react-router-dom";

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
        const { username } = currentUser.user;
        return (
            <div className="container">

                <h2>Welcome {username}</h2>
            </div>
        );
    }

};

export default Homepage;