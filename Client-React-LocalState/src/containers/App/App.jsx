import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import translate from '../../translate/translate';
import settings from '../../settings/settings';
import PageShell from '../../hoc/PageShell/PageShell';
import * as containers from '../../containers';
import { Auxiliary, Layout } from '../../hoc';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={PageShell(containers.Authentication)} />
        <Route path="/photo/:id" exact component={PageShell(containers.PhotoPageDetails)}/>
        <Route path="/" exact component={PageShell(containers.Home)} />
        <Route path='*' exact component={PageShell(containers.NotFound)} />
      </Switch>
    );

    return (
      <Auxiliary>
        <Helmet>
          <meta property="og:title" content={translate.general_meta_title} />
          <meta property="og:description" content={translate.general_meta_description} />
          <meta property="og:url" content={`${process.env.PUBLIC_URL}`} />
          <meta name="description" content={translate.general_meta_description} />
          <meta name="title" content={translate.general_meta_title} />
          <meta name="author" content={settings.creator} />
          <meta name="keyword" content={translate.general_meta_keywords} />
          <title>{translate.general_browser_title}</title>
        </Helmet>
        <Layout>
          {routes}
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;