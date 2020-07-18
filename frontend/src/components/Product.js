import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider } from '@material-ui/core'

export function Product ({ product }) {
  const shadow = '0 41.8px 33.4px rgba(0, 0, 0, 0.086)'

  return (
    <div>
      <Card elevation={0} style={{ width: 200, height: 200, boxShadow: shadow, borderRadius: 8 }}>
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
