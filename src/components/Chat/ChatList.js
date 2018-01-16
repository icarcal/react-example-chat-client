import React, { Component } from 'react';
import ChatListItem from './ChatListItem';

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.renderChatListItems = this.renderChatListItems.bind(this);
    }

    renderChatListItems() {
        return this.props.messages.map(message => <ChatListItem key={ message } message={ message } />);
    }

    render() {
        return (
            <div>
                <ul>
                    { this.renderChatListItems() }
                </ul>
            </div>
        );
    }
}

export default ChatList;