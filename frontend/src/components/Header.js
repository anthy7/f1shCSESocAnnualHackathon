import React, { useState } from 'react'
import { withRouter, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import bgImage from '../images/bg1.jpg'
import { Avatar, Box, Button, Card, Dialog, List, ListItem, ListItemText, IconButton, Typography, InputBase, Badge, ListItemAvatar } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'

const Header = ({ history, match, cart = [], local }) => {
  const [open, setOpen] = useState(false)
  console.log('hello', cart)
  const items = cart.reduce((a, b) => a + (b?.number || 0), 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 32 }}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography variant='overline' style={{ fontSize: 40, color: 'black' }}>Plaza {local ? '| ' + local : null}</Typography>
      </Link>
      <div style={{ display: 'flex' }}>
        <div style={{ marginTop: 4 }}>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackRoundedIcon />
          </IconButton>
        </div>
        <div style={{
          position: 'relative',
          flexGrow: 1,
          color: 'black',
          borderRadius: 8,
          backgroundColor: 'rgba(0, 0 ,0, 0.1)',
          marginRight: 8,
          marginLeft: 8,
          width: 600,
          padding: 12
        }}>
          <InputBase
            style={{ width: '100%' }}
            placeholder='Search…'
          />
        </div>
        <div style={{ marginTop: 4 }}>
          <IconButton onClick={() => setOpen(true)}>
            <Badge badgeContent={items} color='primary'>
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Card style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div style={{ background: 'rgb(255, 255, 255, 0.9)', padding: 16, minHeight: 300, display: 'flex', flexDirection: 'column' }}>
            <div>
              <Typography variant={'overline'} style={{ fontSize: 16, textAlign: 'center', paddingTop: 16 }}>Your Shopping Cart</Typography>
            </div>
            {cart.length ? (<>
            <List style={{ flexGrow: 1 }}>
              {cart.map((product) => (
                <ListItem button key={product}>
                  <ListItemAvatar>
                    <Avatar src={product.image} />
                  </ListItemAvatar>
                  <ListItemText primary={product.name + ' x ' + product.number} />
                </ListItem>
              ))}
            </List>
              <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Button variant='outlined'>
                  Order Now
            </Button>
              </Box>
            </>)
              : <Typography variant='overline' style={{ fontSize: 12 }}>
                You have not added any items yet.
              </Typography>}
          </div>
        </Card>
      </Dialog>
    </div>
  )
}

export default withRouter(Header)