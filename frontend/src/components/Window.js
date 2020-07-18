import React from 'react';
import { Paper, CardMedia } from '@material-ui/core'

export function Window({ shop }) {
  return (
    <div>
      <Paper elevation={0} style={{ minWidth: 200, minHeight: 200 }}>
        {shop.name}
        {shop.products.map(p => <img src={p.image} style={{ maxHeight: 40, maxWidth: 40 }} />)}
      </Paper>
    </div>
  )
}