import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Home from '../../pages/Home/Home'
import Nav from '../Header/Nav'
import About from '../../pages/About/About'
function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= { Login } />
                <Route exact path="/home" component= { Home } />
                <Route exact path="/coin/:crypto" component= { About } />
         </Switch>
        </Router>
         
    )
}

export default routes
