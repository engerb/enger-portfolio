import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import Content from './Content'
import Components from './components/Components'
import Page from './components/page'


ReactGA.initialize('UA-89680968-1')
const history = createBrowserHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

export default () => {
    return (
        <Router>
            <Switch>
                {Object.keys(Content).map((key, i) => {
                    if (key !== 'home') {
                        return  <Route key={key} path={`/${key}`}>
                            <Page page={key}>
                                {Content[key].map((block, indexKey) => Components(block, indexKey))}
                            </Page>
                        </Route>
                    }
                })}
                <Route path='/'>
                    <Page page={'home'}>
                        {Content.home.map((block, indexKey) => Components(block, indexKey))}
                    </Page>
                </Route>
            </Switch>
        </Router>
    )
}