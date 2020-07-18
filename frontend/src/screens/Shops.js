import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import { Window } from '../components'
import { shops } from '../samples/shops'

export function Shops() {

  return (
    <Grid
      spacing={2}
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ background: '#f0f0f0' }}
    >
      {shops.map(s => (
        <Grid item> 
          <Window shop={s} />
        </Grid>
      ))}
    </Grid>
  );
}

