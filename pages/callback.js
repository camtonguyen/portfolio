import React, { Component } from 'react';
import auth0Client from '../services/auth';
import { withRouter } from 'next/router';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
        <BaseLayout>
            <BasePage className="loading">
              <h1>Verifying login...</h1>
            </BasePage>
        </BaseLayout>
    );
  }
}

export default withRouter(Callback);