import { Switch } from 'antd'
import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../../pages/Login'
function routes() {
    return (
        <Switch>
            <Router>
            
                <Route exact path="/" component={Login} />
           
            </Router>
         </Switch>
         
    )
}

export default routes
