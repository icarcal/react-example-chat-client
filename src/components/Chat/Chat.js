import React, { Component } from 'react';
import ChatList from './ChatList';
import ioClient from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'OLA',
                'ALO',
                'OK'
            ],
            message: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.messageReceived = this.messageReceived.bind(this);
    }

    componentDidMount() {
        this.io = ioClient('http://localhost:3001/');
        this.io.on('message:toClient', this.messageReceived);
    }

    messageReceived(data) {
        const messages = [...this.state.messages, data];
        this.setState({ messages: messages });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.io.emit('message:toServer', this.state.message);
        this.setState({ message: '' });
    }

    onInputChange(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div>
                <ChatList messages={ this.state.messages }/>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={ this.state.message }
                        onChange={ this.onInputChange } />
                </form>
            </div>
        );
    }
}

export default Chat;