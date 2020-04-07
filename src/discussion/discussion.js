import React, { Component } from "react";
import "./discussion.scss";
import { Card, CardContent, Paper, Container, Avatar, TextField, Button, Input } from '@material-ui/core';

class Discussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [
                {
                    username: '',
                    chat: ''
                }
            ],

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        const tmessages = this.state.messages;
        tmessages.push({ username: this.props.match.params.username, chat: this.state.message });
        this.setState({ messages: tmessages })
        this.setState({ message: "" })
    }

    render() {
        return (
            <div className='main'>
                <Container maxWidth="lg">
                    <h1>Anonymous Discussion!</h1>
                    <div className="paper"> <Paper variant="outlined" className="paper">
                        {this.state.messages.map(i => {
                            return (
                                <div className="chat">
                                    <div className="Avatar"></div>
                                    <div className="text">
                                        <div className="username"> {i.username} </div>
                                        <div className="chatText"> {i.chat} </div> </div>
                                </div>)
                        })}
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div><Input type="text" value={this.state.message} id="inputText" onChange={this.handleChange} /></div>
                            <Button className="Submit" type="submit" value="Submit" variant="contained" color="primary"> Submit </Button>
                        </form>
                    </Paper> </div>
                </Container>
            </div>
        )
    }
}

export default Discussion;
