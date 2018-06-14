import React, { Component } from 'react';

class ChatListItem extends Component {
    render() {
        return (
            <li className={(this.props.message.sent ? 'sent' : 'received')}>
              <span className={"shadow-sm badge badge-" + (this.props.message.sent ? 'primary' : 'secondary')}>{ this.props.message.content }</span>
            </li>
        );
    }
}

export default ChatListItem
