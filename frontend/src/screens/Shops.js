import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import slugify from 'slugify'
import { Container, Grid, Typography } from '@material-ui/core'

import { Window } from '../components'
import { locations } from '../samples/locations'

export function Shops ({ match, setLocal = () => {} }) {
  const name = match.params.name
  const location = locations.find(l => slugify(l.name) === name)
  setLocal(location.name)
  return (
    <Container>
      <Grid
        style={{ maxWidth: 720 }}
        spacing={8}
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {location.shops.map(s => (
          <Grid item>
            <Link to={'/shop/' + slugify(s.name)} style={{ color: 'black', textDecoration: 'none' }}>
              <Window shop={s} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
