import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import Content from './Content'
import Components from './components/Components'
import Page from './components/page'
import TheNet from './components/TheNet'


export default () => {
    ReactGA.initialize('UA-89680968-1')
    const analytics = (location) => {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(location.pathname)
    }

    const event = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        })
    }

    return (
        <Router>
            <Switch>
                {Object.keys(Content).map((key, i) => {
                    if (key !== 'home') {
                        return  <Route key={key} path={`/${key}`}>
                            <Page analytics={analytics} event={event} page={key}>
                                {Content[key].map((block, indexKey) => Components(block, indexKey, event))}
                            </Page>
                        </Route>
                    }
                })}
                <Route path='/the-net'>
                    <TheNet event={event} analytics={analytics} />
                </Route>
                <Route path='/'>
                    <Page analytics={analytics} event={event} page={'home'}>
                        {Content.home.map((block, indexKey) => Components(block, indexKey, event))}
                    </Page>
                </Route>
            </Switch>
        </Router>
    )
}