import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content'
import Components from './components/Components'
import Page from './components/page'


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