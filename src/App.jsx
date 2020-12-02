import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content'
import Components from './components/Components'
import Page from './components/page'


export default () => {
    return (
        <Router>
            <Switch>
                <Route path='/serve'>
                    <Page page={'serve'}>
                        {Content.serve.map((block, indexKey) => Components(block, indexKey))}
                    </Page>
                </Route>
                <Route path='/wiivv'>
                    <Page page={'wiivv'}>
                        {Content.wiivv.map((block, indexKey) => Components(block, indexKey))}
                    </Page>
                </Route>
                <Route path='/'>
                    <Page page={'home'}>
                        {Content.home.map((block, indexKey) => Components(block, indexKey))}
                    </Page>
                </Route>
            </Switch>
        </Router>
    )
}