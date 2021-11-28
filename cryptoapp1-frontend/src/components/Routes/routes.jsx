import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Home from '../../pages/Home/Home'
import Nav from '../Header/Nav'

function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= { Login } />
                <Nav />
                <Route exact path="/home" component= { Home } />
         </Switch>
        </Router>
         
    )
}

export default routes
