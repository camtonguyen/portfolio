import React, { Component } from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
// import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class Index extends Component {
    constructor(props) {
        super(props);

        this.roles = ['Front-end', 'Angular', 'React.js'];
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        return (
            <BaseLayout className="cover" {...this.props.auth} title="Cam To - Portfolio">
                <div className="main-section">
                    <div className="background-image">
                        <img alt="doodle-background-image" src="../static/images/banner-bg.jpg" />
                    </div>

                    <Container className="inner">
                        <Row>
                            <Col lg="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h2>
                                    { isAuthenticated && <span> <b> {user.name} </b> </span> }
                                    Welcome to my portfolio.<br />
                                    Get informed, collaborate and discover projects that I was working on through the years!
                                    </h2>
                                </div>
                                <Typed
                                    loop
                                    typeSpeed={60}
                                    backSpeed={60}
                                    strings={this.roles}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    cursorChar="|"
                                    className="seft-typed"
                                />
                                <div className="hero-welcome-bio">
                                    <h2>
                                    Let's take a look on my work.
                                    </h2>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="hero-section">
                                    <img alt="blue-mosnter" className="image" src="../static/images/blue-monster.svg"/>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            </BaseLayout>
        )
    }
}

export default Index;