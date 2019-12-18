import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends Component {

    render() {
        return (
            <BaseLayout {...this.props.auth} title="Cam To - About">
              <BasePage className="about-page">
                <Row>
                  <Col md="6" className="left-side">
                    <img width="80%" src="../static/images/about-me.png"/>
                  </Col>
                  <Col md="6" className="right-side">
                    <div className="mt-3 mt-md-0" >
                      <p className="row--1">Hi, I am To - a frontend and freelance web developer. </p>
                      <p className="row--2">
                        Most of the time, I work on designing and building web applications. You can call me a web designer, UI, web developer, or by any other market defined function-title 'cause I love all of that.
                      </p>
                      <p className="row--3">
                        Throughout my career, I don't like to define myself by the work I have done. I set myself by the work I want to do. Skills can be taught, and personality is inherent. So, I prefer to keep learning, continue challenging myself and do exciting things that matter.
                      </p>
                    </div>
                  </Col>
                </Row>
              </BasePage>
            </BaseLayout>
        )
    }
}

export default About;