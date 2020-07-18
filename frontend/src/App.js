import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing } from './screens'

function App () {
  return (
    <Router>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='overhead'>
            PLAZA
        </Typography>
          <Typography variant='h6'>
            <Link to='/shops'>lol</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/shops'>
          <Shops />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
