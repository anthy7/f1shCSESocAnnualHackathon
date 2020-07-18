import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing, Shop } from './screens'
import Header from './components/Header'

function App () {
  const [shoppingCart, setShoppingCart] = useState([])
  const [local, setLocal] = useState()
  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }
  const LandingPage = ({ ...props }) => <Landing setLocal={setLocal} {...props} />
  const ShopPage = ({ ...props }) => <Shop cart={shoppingCart} addToCart={addToCart} {...props} />
  const ShopsPage = ({ ...props }) => <Shops cart={shoppingCart} setLocal={setLocal} {...props} />
  
  return (
    <Router>
      <Header cart={shoppingCart} local={local} />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/shop/:name' component={ShopPage} />
        <Route exact path='/shops/:name' component={ShopsPage} />
      </Switch>
    </Router>
  )
}

export default App
