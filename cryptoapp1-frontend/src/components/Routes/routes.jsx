import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../../pages/Login'
function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= { Login } />
         </Switch>
        </Router>
         
    )
}

export default routes
