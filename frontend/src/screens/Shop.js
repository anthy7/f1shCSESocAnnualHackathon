import React from 'react'
import slugify from 'slugify'
import { Container, Grid, Typography } from '@material-ui/core'

import { Product } from '../components'
import { shops } from '../samples/shops'

export function Shop ({ match, cart, addToCart = () => {} }) {
  const name = match.params.name
  const shop = shops.find(s => slugify(s.name) === name)
  return (
    <Container>
      {shop ?
      <div>
        <Typography variant='overline' style={{ fontSize: 32 }}>{shop.name}</Typography>
        <Grid
          style={{ maxWidth: 720 }}
          spacing={2}
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
        >
          {shop.products.map((p, i) => (
            <Grid key={i} item>
              <Product product={p} cart={cart} addToCart={addToCart} />
            </Grid>
        ))}
        </Grid>
      </div>
      : '404'}
    </Container>
  )
}
