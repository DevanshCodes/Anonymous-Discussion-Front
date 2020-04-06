import React, { Component } from "react";
import "./home.scss";
import { Card, CardContent, Container, Avatar, TextField, Button } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                            <TextField id="input" className="textfield" label="Username" type="input"/>
                            <Button variant="contained" color="primary" className="submit" type="submit">Enter</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Home;
