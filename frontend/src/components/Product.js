import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider } from '@material-ui/core'

export function Product ({ product }) {
  return (
    <div>
      <Card elevation={0} style={{ width: 200, height: 200 }}>
        <CardActionArea style={{ height: '100%' }}>
          <CardContent style={{ position: 'absolute', top: 0 }}>
            <Typography variant='overline'>{product.name}</Typography>
          </CardContent>
          <div style={{ position: 'absolute', bottom: 0, paddingLeft: 8 }}>
            <img src={product.image} style={{ maxHeight: 80, maxWidth: 80 }} />
          </div>
        </CardActionArea>
      </Card>
    </div>
  )
}
