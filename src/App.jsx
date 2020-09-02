import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Content from './Content';
import Components from './components/Components';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path='/serve'>
                    {Content.serve.map((block, indexKey) => Components(block, indexKey))}
                </Route>
                <Route path='/wiivv'>
                    {Content.wiivv.map((block, indexKey) => Components(block, indexKey))}
                </Route>
                <Route path='/'>
                    {Content.home.map((block, indexKey) => Components(block, indexKey))}
                </Route>
            </Switch>
        </Router>
    )
}