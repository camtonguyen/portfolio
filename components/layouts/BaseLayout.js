import React, {Fragment} from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { children, isAuthenticated, user, isSiteOwner } = props;
    const title = props.title || 'Cam To Portfolio';

    return(
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is To and I am a frontend and freelance web developer.Most of the time, I work on designing and building web applications. You can call me a web designer, UI, web developer, or by any other market defined function-title." />
                <meta name="keywords" content="camto portfolio, camto web developer, camto frontend, camto freelancer"/>
                <meta property="og:title" content="Cam To - frontend, developer, freelancer" />
                <meta property="og:locale" content="vi_VN" />
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is To and I am a frontend and freelance web developer."/>
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
            </Head>
            <div className="layout-container" >
                <Header isAuthenticated={isAuthenticated}
                        user={user}
                        isSiteOwner={isSiteOwner}/>
                <main className="cover">
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </Fragment>
    )
};

export default BaseLayout;