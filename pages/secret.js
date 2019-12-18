import React, { Component } from 'react';
import axios from 'axios';

import withAuth from '../components/hoc/withAuth';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { getSecretData, getSecretDataServer } from '../actions';

class Secret extends Component {

    static async getInitialProps({req}) {
        const anotherSecretData = await getSecretData(req);
        return { anotherSecretData };
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         secretData: []
    //     }
    // }

    state = {
        secretData: []
    }

    async componentDidMount() {
        const secretData = await getSecretData();

        this.setState({
            secretData
        });
    }

    displaySecretData() {
        const { secretData } = this.state;
    
        if ( secretData && secretData.length > 0) {
          return secretData.map((data, index) => {
            return (
              <div key={index}>
                <p> { data.title }</p>
                <p> { data.description }</p>
              </div>
            )
          })
        }
    
        return null;
    }

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1> I am Secret Page </h1>
                    <p> Secret Content Here </p>
                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth()(Secret);