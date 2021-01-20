import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import Layout from './layout';
import Routes from './routes';

interface OwnProps {
  history: History;
}

const App: React.FC<OwnProps> = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Layout>
        <Routes />
      </Layout>
    </ConnectedRouter>
  );
}

export default App;
