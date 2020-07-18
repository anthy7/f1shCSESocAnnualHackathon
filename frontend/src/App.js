import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Shops, Landing } from './screens'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/shops" component={Shops} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
