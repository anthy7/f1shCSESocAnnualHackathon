import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Shops } from './screens'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Shops} />
        <Route path="/shops" component={Shops} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
