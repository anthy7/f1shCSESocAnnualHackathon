import React from 'react'
import { Container, Grid } from '@material-ui/core'

import { Product } from '../components'
import { shops } from '../samples/shops'

export function Shop ({ match }) {
  const name = match.params.name
  const shop = shops.find(s => s.name.toLowerCase() === name)
  console.log('hi', shop, match)
  return (
    <Container style={{ background: '#f0f0f0' }}>
      {shop ? <Grid
        style={{ maxWidth: 800 }}
        spacing={2}
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        hewwooo
        <p>{name}</p>
        {shop.products.map((p, i) => (
          <Grid key={i} item>
            <Product product={p} />
          </Grid>
        ))}
      </Grid> : '404'}
    </Container>
  )
}
