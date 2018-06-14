import React, { Component } from 'react';
import ChatList from './ChatList';
import ioClient from 'socket.io-client';
import './Chat.css';
class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
      contentStyle: {
        top: '350px',
      }
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.setMessages = this.setMessages.bind(this);
  }

  componentDidMount() {
    this.io = ioClient('http://localhost:3001/');
    this.io.on('message:toClient', (data) => {
      this.setMessages(data);
    });
  }

  setMessages(data, isSent) {
    const messages = [...this.state.messages, { content: data, sent: isSent }];
    let topPosition = this.state.contentStyle.top.replace('px', '') - 25;
    topPosition = `${topPosition}px`

    this.setState({ messages, contentStyle: { top: topPosition } });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if(this.state.message !== '') {
      this.setMessages(this.state.message, true);

      this.io.emit('message:toServer', this.state.message);
      this.setState({ message: '' });
    }
  }

  onInputChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4 col-md-5 col-xl-4 m-5">
            <div className="chat">
              <div className="chat-content" style={this.state.contentStyle}>
                <ChatList className="align-bottom" messages={this.state.messages} />
              </div>
              <div className="chat-form">
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.message}
                      onChange={this.onInputChange} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
