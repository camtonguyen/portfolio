import React, { Component } from 'react';

import withAuth from '../components/hoc/withAuth';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Owner extends Component {

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Owner page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(Owner);