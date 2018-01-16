import React, { Component } from 'react';

class ChatListItem extends Component {
    render() {        
        return (
            <li>{ this.props.message } </li>
        );
    }
}

export default ChatListItem