import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { messages, removeMessage, currentUser } = this.props;
        let messageList = messages.map(m => {
            const { _id: messageId, createdAt, text } = m;
            const { _id: userId, username, profileImageUrl } = m.user;
            console.log( m.user);
            return <MessageItem
                key={messageId}
                date={createdAt}
                text={text}
                username={username}
                profileImageUrl={profileImageUrl}
                removeMessage={removeMessage.bind(this, userId, messageId)}
                isCorrectUser={currentUser === userId}
            />;
        });
        return (
            <div className=" row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);
