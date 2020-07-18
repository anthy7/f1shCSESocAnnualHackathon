import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import bgImage from '../images/bg1.jpg'
import { Avatar, Card, Dialog, DialogTitle, List, ListItem, ListItemText, IconButton, Typography, InputBase, Badge, ListItemAvatar } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

export default function Header({ cart = [] }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 32 }}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography variant='overline' style={{ fontSize: 40, color: 'black' }}>Plaza</Typography>
      </Link>
      <div style={{
        position: 'relative',
        flexGrow: 1,
        color: 'black',
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0 ,0, 0.1)',
        marginRight: 8,
        marginLeft: 0,
        width: 400,
        padding: 12
      }}>
        <InputBase
          placeholder='Search…'
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <IconButton onClick={() => setOpen(true)}>
          <Badge badgeContent={cart.length} color='primary'>
            <ShoppingCartRoundedIcon />
          </Badge>
        </IconButton>
      </div>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Card style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div style={{ background: 'rgb(255, 255, 255, 0.9)', padding: 16, minHeight: 300 }}>
            <div>
              <Typography variant={'overline'} style={{ fontSize: 16, textAlign: 'center', paddingTop: 16 }}>Your Shopping Cart</Typography>
            </div>
            {cart.length ? <List>
              {cart.map((product) => (
                <ListItem button key={product}>
                  <ListItemAvatar>
                    <Avatar src={product.image} />
                  </ListItemAvatar>
                  <ListItemText primary={product.name} />
                </ListItem>
              ))}
            </List>
              : <Typography variant='overline' style={{ fontSize: 12 }}>
                You have not added any items yet.
              </Typography>}
          </div>
        </Card>
      </Dialog>
    </div>
  )
}