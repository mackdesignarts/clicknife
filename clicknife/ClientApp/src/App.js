import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import NavMenu from './components/common/NavMenu';

export default () => (
  <Layout>
    <Route exact path='/' component={NavMenu} />
  </Layout>
);
