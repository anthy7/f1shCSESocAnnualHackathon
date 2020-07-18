import React from 'react'
import { Container, Grid } from '@material-ui/core'

import { Window } from '../components'
import { shops } from '../samples/shops'

export function Shop ({ shop }) {
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
        {shop.products.map((p, i) => (
          <Grid key={i} item>
            <Window shop={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
