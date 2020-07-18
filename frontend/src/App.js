import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing, Shop } from './screens'
import Header from './components/Header'

import { shops } from './samples/shops'

function App () {
  const shopUrls = []
  for (let i = 0; i < shops.length; i++) {
    const str = shops[i].name.replace(/\s+/g, '-').toLowerCase()
    shopUrls.push(str)
    console.log(str)
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/shops'>
          <Shops />
        </Route>
        <Route exact path='/shop/:name' component={Shop} />
      </Switch>
    </Router>
  )
}

export default App
