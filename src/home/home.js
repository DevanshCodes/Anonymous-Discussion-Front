import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./home.scss";
import { Card, CardContent, Container, Avatar, TextField, Button, Input } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',

        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <div className='main'>
                <Container maxWidth="md">
                    <h1>Anonymous Discussion!</h1>
                </Container>
                <Card className="Card">
                    <CardContent className="content">
                        <div className="greeting">Enter a Username to get Started</div>
                        <div><Avatar className="avatar"></Avatar></div>
                        <form className="form">
                            <Input type="text" value={this.state.username} id="inputText" onChange={this.handleChange} />
                            <Link to={`${this.state.username}`}><Button className="Submit" type="submit" value="Submit" variant="contained" color="primary"> Submit </Button></Link>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Home;
