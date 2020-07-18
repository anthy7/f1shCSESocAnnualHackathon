import React, { useState } from 'react'
import { Palette } from 'react-palette'
import { Card, CardActionArea, CardContent, IconButton, Dialog, Typography } from '@material-ui/core'
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded'

export function Product({ product, cart, addToCart = () => {} }) {
  const shadow = '0 41.8px 33.4px rgba(0, 0, 0, 0.086)'
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleAddShopping = () => {
    addToCart(product)
  }
  return (
    <Palette src={product.image}>
      {({ data, loading, error }) => (
        <Card elevation={0} style={{ width: 200, height: 200, background: data?.lightMuted, boxShadow: shadow, borderRadius: 8, transition: 'all 0.2s ease' }}>
          <CardActionArea style={{ height: '100%' }} onClick={() => setOpen(true)}>
            <CardContent style={{ position: 'absolute', top: 0 }}>
              <Typography variant='overline' style={{ fontSize: 16, color: data?.darkMuted, transition: 'all 0.2s ease', lineHeight: 1.5 }}>{product.name}</Typography>
            </CardContent>
            <div style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 20, color: data?.darkMuted }}>
              {'$' + product.price.toFixed(2)}
            </div>
            <div style={{ position: 'absolute', bottom: -8, paddingLeft: 8 }}>
              <img src={product.image} style={{ maxHeight: 120, maxWidth: 120 }} />
            </div>
          </CardActionArea>
          <Dialog onClose={handleClose} open={open}>
            <Card elevation={0} style={{ width: 500, height: 300, background: data?.lightMuted, boxShadow: shadow, transition: 'all 0.2s ease' }}>
              <IconButton style={{ position: 'absolute', top: 4, right: 4 }} onClick={() => setOpen(false)}>
                <HighlightOffRoundedIcon />
              </IconButton>
              <CardContent style={{ position: 'absolute', top: 0 }}>
                <div>
                  <Typography variant='overline' style={{ fontSize: 24, color: data?.darkMuted, transition: 'all 0.2s ease', lineHeight: 1.5 }}>{product.name}</Typography>
                </div>
                <div>
                  <Typography variant='overline' style={{ fontSize: 24, color: data?.darkMuted, transition: 'all 0.2s ease', lineHeight: 1.5 }}>{'$' + product.price.toFixed(2)}</Typography>
                </div>
              </CardContent>
              <IconButton style={{ position: 'absolute', bottom: 4, right: 4 }} onClick={handleAddShopping}>
                <AddShoppingCartRoundedIcon />
              </IconButton>
              <div style={{ position: 'absolute', bottom: -8, paddingLeft: 8 }}>
                <img src={product.image} style={{ maxHeight: 120, maxWidth: 120 }} />
              </div>
            </Card>
          </Dialog>
        </Card>
      )}
    </Palette>
  )
}
