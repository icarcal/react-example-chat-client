import React, { Component } from 'react';
import ChatListItem from './ChatListItem';

class ChatList extends Component {
  constructor(props) {
    super(props)

    this.renderChatListItems = this.renderChatListItems.bind(this);
  }

  renderChatListItems() {
    return this.props.messages.map((message, index) => <ChatListItem key={ index } message={ message } />);
  }

  render() {
    return (
      <ul>
        { this.renderChatListItems() }
      </ul>
    );
  }
}

export default ChatList;
