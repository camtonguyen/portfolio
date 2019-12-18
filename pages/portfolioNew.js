
import React, { Component } from 'react';
import { Row } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import withAuth from '../components/hoc/withAuth';

import { createPortfolio } from '../actions';
import { Router } from '../routes';

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    position: '',
    description: '',
    startDate: new Date(),
    endDate: new Date()
}

class PortfolioNew extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        }

        this.createPortfolio = this.createPortfolio.bind(this);
    }

    createPortfolio(portfolioData, {setSubmitting}) {
        setSubmitting(true);

        createPortfolio(portfolioData)
        .then((portfolio) => {
            setSubmitting(false);
            this.setState({error: undefined});
            Router.pushRoute('/portfolio');
        }).catch((err) => {
            const error = err.message || 'Server error';
            setSubmitting(false);
            this.setState({error: error})
        })
    }

    render() {
        const {error} = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create New Portfolio">
                    <Row>
                        <PortfolioCreateForm initialValues={INITIAL_VALUES}
                                             error={error}
                                             onSubmit={this.createPortfolio}/>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioNew);