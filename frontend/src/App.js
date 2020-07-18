import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing, Shop } from './screens'
import Header from './components/Header'

function App () {
  const [shoppingCart, setShoppingCart] = useState([])
  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }
  const ShopPage = ({ ...props }) => <Shop cart={shoppingCart} addToCart={addToCart} {...props} />
  const ShopsPage = ({ ...props }) => <Shops cart={shoppingCart} {...props} />
  
  return (
    <Router>
      <Header cart={shoppingCart} />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/shop/:name' component={ShopPage} />
        <Route exact path='/shops/:name' component={ShopsPage} />
      </Switch>
    </Router>
  )
}

export default App
