
import React, { Component } from 'react';
import { Row } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import withAuth from '../components/hoc/withAuth';

import { updatePortfolio, getPortfolioById } from '../actions';
import { Router } from '../routes';

class PortfolioEdit extends Component {

    static async getInitialProps({query}) {
        let portfolio = {};
    
        try {
          portfolio =  await getPortfolioById(query.id);
        } catch(error) {
          console.error(error);
        }
    
        return {portfolio};
    }

    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        }

        this.updatePortfolio = this.updatePortfolio.bind(this);
    }

    updatePortfolio(portfolioData, {setSubmitting}) {
        setSubmitting(true);

        updatePortfolio(portfolioData)
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
        const {portfolio} = this.props
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Update Portfolio">
                    <Row>
                        <PortfolioCreateForm initialValues={portfolio}
                                             error={error}
                                             onSubmit={this.updatePortfolio}/>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioEdit);