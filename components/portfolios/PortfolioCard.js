

import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

import PortfolioCardDetail from './PortfolioCardDetail';

export default class PortfolioCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
    
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    handleToggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        const { portfolio, children, imgSrc } = this.props;
        const { isOpen } = this.state;

        return(
            <span onClick={this.handleToggle}>

                <PortfolioCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/>

                <Card className="portfolio-card">
                    <CardImg className="portolio-card-image" top width="100%" src={imgSrc} />
                    <CardBody>
                        <CardText className="portfolio-card-text text-left">
                            <span>{portfolio.position}</span>
                            <span>{portfolio.location}</span>
                        </CardText>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <div className="btn-group">
                            {children}
                        </div>
                    </CardBody>
                </Card>
            </span>
        )
    }
}