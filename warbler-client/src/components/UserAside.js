import React from "react";
import defaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({username, profileImageUrl}) => (
    <aside className="col-sm-2">
       <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title ">{username}</h3>
            </div>
            <div className="panel-body">
                <img src={profileImageUrl || defaultProfileImage} alt={username} className="img-thumbnail" />
            </div>
       </div>
    </aside>
);

export default UserAside;