import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCard from '../components/portfolios/PortfolioCard';

import { getPortfolios, deletePortfolio } from '../actions'; 
import { Router } from '../routes';

class Portfolio extends Component {

    static async getInitialProps() {
        let portfolios = [];
        try {
          portfolios = await getPortfolios();
        } catch(err) {
          console.error(err);
        }
    
        return {portfolios};
    }

    navigateToEdit(portfolioId, e) {
        e.stopPropagation();
        Router.pushRoute(`/portfolio/${portfolioId}/edit`)
    }

    navigateToCreate(e) {
        e.stopPropagation();
        Router.pushRoute('/portfolio/new')
    }
    
    displayDeleteWarning(portfolioId, e) {
        e.stopPropagation();
        const isConfirm = confirm('Are you sure you want to delete this portfolio???');

        if (isConfirm) {
            this.deletePortfolio(portfolioId);
        }
    }
    
    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
            .then(() => {
                Router.pushRoute('/portfolio');
            }).catch(err => console.error(err));
    }

    renderPortfolios(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return portfolios.map((portfolio, index) => {
            return (
                <Col lg="4" key={index}>
                    <PortfolioCard portfolio={portfolio} imgSrc={`../static/images/card-image-${index}.jpg`}>
                        {isAuthenticated && isSiteOwner &&
                            <Fragment>
                                <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color="warning">Edit</Button>{' '}
                                <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color="danger">Delete</Button>
                            </Fragment>
                        }
                    </PortfolioCard>
                </Col>
            )
        })
    }

    render() {
        const { portfolios } = this.props;
        const { isAuthenticated, isSiteOwner } = this.props.auth;

        return (
            <BaseLayout {...this.props.auth} title="Cam To - Portfolio">
                <BasePage className="portfolio-page">
                    <div className="text-center mb-3">
                        <a className="text-dark" target="_blank" href="https://camtonguyen.github.io/">Click here to see more projects that I have been doing.</a>
                    </div>
                    <Row>
                        { this.renderPortfolios(portfolios) }
                        {isAuthenticated && isSiteOwner &&
                            <Col lg="4" className="create-area">
                                <img onClick={(e) => this.navigateToCreate(e)} src="../static/images/plus-sign.png" />
                            </Col>
                        }
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolio;