import React, { Component } from "react";
import "./discussion.scss";
import socketIOClient from "socket.io-client";
import { Paper, Container } from '@material-ui/core';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

var socket;

class Discussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: "http://localhost:4000",
            message: '',
            messages: [
                {
                    username: '',
                    chat: '',
                    roomno: ''
                }
            ],

        };
        socket = socketIOClient.connect(this.state.endpoint)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        socket.on('newChat', async (data) => {
            var tmessages = this.state.messages;
            tmessages.push({ username: data.username, chat: data.chat })
            this.setState({ messages: tmessages });

        })

    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`http://localhost:4000/api/chats/${params.roomno}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ messages: data })
            });
            console.log(params);
            socket.on('connect', function() {
                socket.emit('room', params.roomno);
             });
    }

    componentDidUpdate() {
        const objDiv = document.getElementById('chatscroll');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    handleChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        var nmessage = { username: this.props.match.params.username, chat: this.state.message, roomno: this.props.match.params.roomno }
        socket.emit("newMessage", nmessage);
        this.setState({ message: "" })
    }

    render() {
        return (
            <div className='main'>
                <Container maxWidth="lg">
                    <h1>Anonymous Discussion!</h1>
                    <div> <Paper variant="outlined" className="paper" id="chatscroll">
                        {this.state.messages.map(i => {
                            return (
                                <div className="chat">
                                    <div className="Avatar"></div>
                                    <div className="text">
                                        <div className="username"> {i.username} </div>
                                        <div className="chatText"> {i.chat} </div> </div>
                                </div>)
                        })}
                    </Paper> </div>
                    <form>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={this.state.message}
                                onChange={this.handleChange}
                                placeholder="Chat Message"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleSubmit} className="submit" type="submit">Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Discussion;
