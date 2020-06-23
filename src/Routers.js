import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './app/Pages/Home/index'

const Routes = () => (
    <Switch>
        <Route component={Home}/>
    </Switch>
);

export default Routes