import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
    return (
        <div className="row">
            <UserAside username={props.username} profileImageUrl={props.profileImageUrl}/>
            <MessageList />
        </div>
    );
}

export default MessageTimeline;