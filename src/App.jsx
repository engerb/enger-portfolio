import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Content from './Content';
import Components from './components/Components';

class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/serve'>
                        {Content.serve.map((block, key) => Components(block, key))}
                    </Route>
                    <Route path='/wiivv'>
                        {Content.wiivv.map((block, key) => Components(block, key))}
                    </Route>
                    <Route path='/'>
                        {Content.home.map((block, key) => Components(block, key))}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;