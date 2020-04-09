import React, { Component } from "react";
import "./discussion.scss";
import socketIOClient from "socket.io-client";
import { Paper, Container, Button, Input } from '@material-ui/core';
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
                    chat: ''
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
        fetch('http://localhost:4000/api/chats')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ messages: data })
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
        var tmessages = this.state.messages;
        var nmessage = { username: this.props.match.params.username, chat: this.state.message }
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
                    <form className="form" >
                            <div><Input type="text" value={this.state.message} id="inputText" onChange={this.handleChange} /></div>
                            <Button className="Submit" type="submit" value="Submit" variant="contained" color="primary" onClick={this.handleSubmit}> Submit </Button>
                        </form>
                </Container>
            </div>
        )
    }
}

export default Discussion;
