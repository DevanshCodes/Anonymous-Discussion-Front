import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./home.scss";
import { Card, CardContent, Container, Avatar} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            roomno: ''

        };
        this.handleChangeusername = this.handleChangeusername.bind(this)
        this.handleChangeroomno = this.handleChangeroomno.bind(this);
    }

    handleChangeusername(event) {
        this.setState({ username: event.target.value })
    }
    handleChangeroomno(event) {
        this.setState({ roomno: event.target.value })
    }

    render() {
        return (
            <div className='main'>
                <Container maxWidth="md">
                    <h1>Anonymous Discussion!</h1>
                </Container>
                <Card className="Card">
                    <CardContent className="content">
                        <div className="greeting">Let's Get Started!</div>
                        <div><Avatar className="avatar"></Avatar></div>
                        <form className="form">
                            <InputGroup className="mb-3" type="text" value={this.state.username} id="inputText" onChange={this.handleChangeusername}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3" type="text" value={this.state.roomno} id="inputText" onChange={this.handleChangeroomno}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="RoomID"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Link to={`${this.state.username}/${this.state.roomno}`}><Button className="Submit" type="submit" value="Submit" variant="primary"> Submit </Button></Link>
                        </form>
                    </CardContent>
                </Card>
                <Container maxWidth="md">
                <Button>DevanshCodes</Button>
                </Container>
            </div>
        )
    }
}

export default Home;
