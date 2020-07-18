import React from 'react'
import slugify from 'slugify'
import { Container, Grid } from '@material-ui/core'

import { Product } from '../components'
import { shops } from '../samples/shops'

export function Shop ({ match }) {
  const name = match.params.name
  const shop = shops.find(s => slugify(s.name) === name)
  return (
    <Container>
      {shop ? <Grid
        style={{ maxWidth: 800 }}
        spacing={2}
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <p>{shop.name}</p>
        {shop.products.map((p, i) => (
          <Grid key={i} item>
            <Product product={p} />
          </Grid>
        ))}
      </Grid> : '404'}
    </Container>
  )
}
