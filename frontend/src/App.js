import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header'
import { Shops, Landing } from './screens'

function App() {
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
      </Switch>
    </Router>
  )
}

export default App
