import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import defaultProfileImage from "../images/default-profile-image.jpg";


const MessageItem = ({ username, text, date, profileImageUrl, removeMessage }) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageUrl || defaultProfileImage} alt={username} className="timeline-image" width="100" height="100" />
            <div className="message-area">
                <Link to="/">@{username} &nbsp; </Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
                <a className="btn btn-danger" onClick={removeMessage}>Delete</a>
        
            </div>
        </li>

    </div>
);

export default MessageItem;