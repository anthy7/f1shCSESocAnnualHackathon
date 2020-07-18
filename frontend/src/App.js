import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import { Shops, Landing } from './screens'

function App() {
  return (
    <Router>
      {/* <AppBar position='static'>
        <Toolbar style={{
          minHeight: 128,
          padding: 4,
        }}>
          <Typography variant='overhead'>
            PLAZA
        </Typography>
          <Typography variant='h6'>
            <Link to='/shops'>lol</Link>
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div style={{
        root: {
          flexGrow: 1,
        },
      }}>
        <AppBar position="static">
          <Toolbar style={{
            minHeight: 85,
            alignItems: 'flex-start',
            paddingTop: 4,
            paddingBottom: 8
          }} >
            <IconButton
              style={{
                marginRight: 8,
              }}
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
              variant="h5" noWrap>
              Plaza
          </Typography>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

      </div>

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
