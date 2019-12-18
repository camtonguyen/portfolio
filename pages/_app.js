import React, { Component, Fragment } from 'react';
import App from 'next/app';

import auth0 from '../services/auth';

// Stylings
import '../styles/main.scss';



class Layout extends Component {
  render() {
    const { children } = this.props
    return <Fragment>{children}</Fragment>
  }
}


export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner = user && user[process.env.NAMESPACE + '/role'] === 'siteOwner';
    const auth = { user, isAuthenticated: !!user, isSiteOwner };


    return { pageProps, auth }
  }


  render () {
    const { Component, pageProps, auth } = this.props

    return (
      <Layout>
        <Component {...pageProps} auth={auth}/>
      </Layout>
    )
  }
}