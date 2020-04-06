import React, { Component } from "react";
import "./discussion.scss";
import { Card, CardContent, Paper, Container, Avatar, TextField, Button } from '@material-ui/core';

class Discussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='main'>
                <Container maxWidth="lg">
                    <h1>Anonymous Discussion!</h1>
                    <div> <Paper variant="outlined" className="paper">
                        <div className="chat">
                            <div className="Avatar"><Avatar className="avatart"></Avatar></div>
                            <div className="text">
                                <div className="username">Username</div>
                                <div className="chatText">Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.</div>
                            </div>
                        </div>
                        <div className="chat">
                            <div className="Avatar"><Avatar className="avatart"></Avatar></div>
                            <div className="text">
                                <div className="username">Username</div>
                                <div className="chatText">Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.</div>
                            </div>
                        </div>
                        <div className="chat">
                            <div className="Avatar"><Avatar className="avatart"></Avatar></div>
                            <div className="text">
                                <div className="username">Username</div>
                                <div className="chatText">Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.Hello this is the random text for the Chat.</div>
                            </div>
                        </div>
                    </Paper> </div>
                </Container>
            </div>
        )
    }
}

export default Discussion;
