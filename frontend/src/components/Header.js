import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

export default function Header() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 32 }}>
      <Typography variant='overline' style={{ fontSize: 40 }}>
        Plaza
      </Typography>
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
        <IconButton>
          <Badge badgeContent={10} color='primary'>
            <ShoppingCartRoundedIcon />
          </Badge>
        </IconButton>
      </div>
    </div>
  )
}