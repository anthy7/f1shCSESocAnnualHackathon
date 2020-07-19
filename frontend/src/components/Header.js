import React, { useState } from 'react'
import { withRouter, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import bgImage from '../images/bg1.jpg'
import { Avatar, Box, Button, Card, Dialog, TableBody, TableContainer, Table, TableHead, TableRow, TableCell, List, ListItem, ListItemText, IconButton, Typography, InputBase, Badge, ListItemAvatar } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone'
import logo from '../images/plazaLogo.png'

const Header = ({ history, match, cart = [], local, emptyCart = () => {} }) => {
  const [open, setOpen] = useState(false)
  const [finishOrder, setFinishOrder] = useState(false)
  const items = cart.reduce((a, b) => a + (b?.number || 0), 0)
  const total = cart.reduce((a, b) => a + (b?.price * b?.number || 0), 0)


  const handleEmpty = () => {
    emptyCart()
    const timer = setTimeout(() => {
      setFinishOrder(false)
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 32 }}>
      <Link to='/' style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={logo}
          style={{
            maxWidth: 50,
            maxHeight: 50,
            position: 'relative',
            padding: -2,
            margin: -2
          }}
        />
        <Typography variant='overline' style={{ fontSize: 40, color: 'black', marginTop: -20, padding: 0 }}>Plaza {local ? '| ' + local : null}</Typography>
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
          marginTop: 0,
          width: 600,
          padding: 12
        }}
        >
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
              <Typography variant='overline' style={{ fontSize: 16, textAlign: 'center', paddingTop: 16 }}>Your Shopping Cart</Typography>
            </div>
            {cart.length ? (<>
              <TableContainer style={{ flexGrow: 1 }}>
                <Table aria-label='simple table'>
                  <TableBody>
                    {cart.map((item) => (
                      <TableRow key={item}>
                        <TableCell component='th' scope='row'>
                          <Avatar src={item.image} />
                        </TableCell>
                        <TableCell>{item.name} x {item.number}</TableCell>
                        <TableCell align='right'>${item.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                <Typography variant='overline' style={{ lineHeight: 1, paddingTop: 8, padding: 8 }}>
                  Your total comes down to
                </Typography>
                <Typography variant='overline' style={{ fontSize: 24, lineHeight: 1, padding: 8, paddingBottom: 16 }}>
                  ${total.toFixed(2)}
                </Typography>
              <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <Button variant='outlined' onClick={() => {
                  setOpen(false)
                  setFinishOrder(true)
                  handleEmpty()
                }}>
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
      <Dialog onClose={() => {
        setFinishOrder(false)
      }} open={finishOrder}>
        <Card style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div style={{ background: 'rgb(255, 255, 255, 0.9)', padding: 16, display: 'flex', flexDirection: 'column' }}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant={'overline'} style={{ fontSize: 16, textAlign: 'center' }}>Your order has been placed</Typography>
              <CheckCircleTwoToneIcon style={{ paddingLeft: 16, color: 'green' }} />
            </Box>
          </div>
        </Card>
      </Dialog>
    </div>
  )
}

export default withRouter(Header)
