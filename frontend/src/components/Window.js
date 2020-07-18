import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

export function Window({ shop }) {
  return (
    <div>
      <Card elevation={0} style={{ minWidth: 200, minHeight: 200 }}>
        <CardContent>
          <Typography variant='overline'>{shop.name}</Typography>
        </CardContent>
        <CardContent>
          {shop.products.map(p => <img src={p.image} style={{ maxHeight: 80, maxWidth: 80 }} />)}
        </CardContent>

      </Card>
    </div>
  )
}