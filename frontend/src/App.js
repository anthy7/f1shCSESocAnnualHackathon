import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing, Shop } from './screens'
import Header from './components/Header'

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/shop/:name' component={Shop} />
        <Route exact path='/shops/:name' component={Shops} />
      </Switch>
    </Router>
  )
}

export default App
