import React from 'react';
import {compose, withProps} from "recompose";
import { Route, Switch } from 'react-router';
import { withGoogleMap, withScriptjs } from "react-google-maps";

import { Map } from "../components";
import { NotFound } from '../components';
import {defaultUrl} from "./map.config";

const composedMapFunction = compose(
    withProps({
        googleMapURL: defaultUrl,
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `500px`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withScriptjs,
    withGoogleMap,
)(() => <Map/>)

export const RoutingConfig = () => (
    <Switch>
        <Route path="/" exact component={ () => composedMapFunction()} />

        <Route render={() => <NotFound />} />
    </Switch>
);
