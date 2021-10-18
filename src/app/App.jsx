import React from 'react';

import './App.css';
import { Header } from "../components";
import { RoutingConfig } from '../configurations';

export default () => (
  <>
    <Header />
    { RoutingConfig() }
  </>
);
