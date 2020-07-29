import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from 'Content';
import Example from './components/Example';

class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/serve'>
                        
                    </Route>
                    <Route path='/wiivv'>
                        
                    </Route>
                    <Route path='/'>
                        
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;