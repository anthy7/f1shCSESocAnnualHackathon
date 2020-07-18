import React from 'react'
import { Container, Grid } from '@material-ui/core'

import { Product } from '../components'
import { shops } from '../samples/shops'

export function Shop ({ shop, match, location }) {
  const { params: { name } } = match
  return (
    <Container style={{ background: '#f0f0f0' }}>
      <Grid
        style={{ maxWidth: 800 }}
        spacing={2}
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        hewwooo
        {shop.products.map((p, i) => (
          <Grid key={i} item>
            <Product product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
