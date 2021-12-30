import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Home from '../../pages/Home/Home'
import Nav from '../Header/Nav'
import About from '../../pages/About/About'
import NotFound from '../../pages/404/NotFound'
import TermsAndConditions from '../../pages/TermsConditions/TermsAndConditions'
import Compare from '../../pages/Compare/Compare'
import Contact from '../../pages/Contact/Contact'
function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= { Login } />
                <Route exact path="/latest" component= { Home } />
                <Route exact path="/coin/:crypto" component= { About } />
                <Route exact path="/terms" component= { TermsAndConditions } />
                <Route exact path="/compare" component= { Compare } />
                <Route exact path="/contact" component= { Contact } />

                <Route component={NotFound}/>
         </Switch>
        </Router>
         
    )
}

export default routes
