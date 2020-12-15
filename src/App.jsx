import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import Content from './Content'
import Components from './components/Components'
import Page from './components/page'


export default () => {
    ReactGA.initialize('UA-89680968-1')
    const analytics = (location) => {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(location.pathname)
    }

    // Preload some important images
    useEffect(() => {
        Content.preLoad.forEach((picture) => {
            new Image().src = picture.fileName
        })
    }, [])

    return (
        <Router>
            <Switch>
                {Object.keys(Content).map((key, i) => {
                    if (key !== 'home') {
                        return  <Route key={key} path={`/${key}`}>
                            <Page analytics={analytics} page={key}>
                                {Content[key].map((block, indexKey) => Components(block, indexKey))}
                            </Page>
                        </Route>
                    }
                })}
                <Route path='/'>
                    <Page analytics={analytics} page={'home'}>
                        {Content.home.map((block, indexKey) => Components(block, indexKey))}
                    </Page>
                </Route>
            </Switch>
        </Router>
    )
}