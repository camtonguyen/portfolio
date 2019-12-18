import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Resume extends Component {

    render() {
        return (
            <BaseLayout {...this.props.auth} title="Cam To - Resume">
                <BasePage className="resume-page">
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <div className="resume-title text-center mb-3">
                                <a download="camto-resume.pdf" className="btn btn-success" href="../static/camto-resume.pdf">Download</a>
                            </div>
                            <iframe style={{width: '100%', height: '800px'}} src="/static/camto-resume.pdf">
                            </iframe>  
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Resume;