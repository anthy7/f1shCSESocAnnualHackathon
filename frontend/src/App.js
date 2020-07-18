import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Shops, Landing, Shop } from './screens'
import Header from './components/Header'

import { shops } from './samples/shops'

const users = [
  {
    name: 'Param'
  },
  {
    name: 'Vennila'
  },
  {
    name: 'Afrin'
  }
]

const UserPage = ({ match, location }) => {
  const { params: { name } } = match

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {name}
      </p>
      <p>
        <strong>User Name: </strong>
      </p>
    </>
  )
}

function App () {
  const shopUrls = []
  for (let i = 0; i < shops.length; i++) {
    const str = shops[i].name.replace(/\s+/g, '-').toLowerCase()
    shopUrls.push(str)
    console.log(str)
  }

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

// // when the url matches `/tacos` this component renders
// const Tacos  = ({ match }) => (
//   // here's a nested div
//   <div>
//       {/* here's a nested Route,
//           match.url helps us make a relative path */}
//       <Route
//       path={match.url + '/carnitas'}
//       component={Carnitas}
//       />
//   </div>
// )

export default App
