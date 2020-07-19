import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import slugify from 'slugify'
import styled from 'styled-components'
import { Box, Container, Grid, Typography } from '@material-ui/core'

import { Product, Neighbour } from '../components'
import { locations } from '../samples/locations'
import { shops } from '../samples/shops'

const Left = styled.div(() => ({
  position: 'absolute',
  left: -240,
  top: 408,
  zIndex: 4,
  transition: 'all 1s ease',
  '&:hover': {
    left: -8
  }
}))

const Right = styled.div(() => ({
  position: 'absolute',
  right: -240,
  top: 408,
  zIndex: 4,
  transition: 'all 1s ease',
  '&:hover': {
    right: -8
  }
}))

export function Shop({ match, cart, local = '', addToCart = () => { } }) {
  const name = match.params.name
  const shop = shops.find(s => slugify(s.name) === name)
  let neighbour1 = shop.neighbours[0]
  let neighbour2 = shop.neighbours[1]
  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        {neighbour1 && <Left><Link to={'/shop/' + slugify(neighbour1.name)}><Neighbour shop={neighbour1} /></Link></Left>}
        <Container>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            {shop &&
              <div style={{ maxWidth: 648 }}>
                <div>
                  <Typography variant='overline' style={{ fontSize: 32 }}>{shop.name}</Typography>
                </div>
                <div style={{marginBottom: 40}}>
                  <Typography variant='overline' style={{ fontSize: 12 }}>{shop.description}</Typography>
                </div>
                <Grid
                  style={{ maxWidth: 648 }}
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
            }
          </Box>
        </Container>
        {neighbour2 && <Right><Link to={'/shop/' + slugify(neighbour1.name)}><Neighbour shop={neighbour2} /></Link></Right>}
      </div>
    </div>
  )
}
