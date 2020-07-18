import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'

import { Window } from '../components'
import { shops } from '../samples/shops'

export function Shops () {
  return (
    <Container>
      <Grid
        style={{ maxWidth: 800 }}
        spacing={2}
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {shops.map(s => (
          <Grid item>
            <Window shop={s} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
