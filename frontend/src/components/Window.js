import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider } from '@material-ui/core'
import { Palette } from 'react-palette'


export function Window({ shop }) {
  const shadow = '0 41.8px 33.4px rgba(0, 0, 0, 0.086)'
  
  return (
    <div>
      <Card elevation={0} style={{ width: 200, height: 200, boxShadow: shadow, borderRadius: 8 }}>
        <CardActionArea style={{ height: '100%', display: 'flex' }}>
          <Palette src={shop.products[0].image}>
            {({ data, loading, error }) => (
            <CardContent style={{ position: 'absolute', top: 0, background: data?.lightMuted, width: '100%', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <Typography variant='overline' style={{ color: data?.darkMuted, transition: 'all 0.2s ease', fontWeight: 700 }}>{shop.name}</Typography>
            </CardContent>
            )}
          </Palette>
          <div style={{ position: 'absolute', bottom: -8, paddingLeft: 8, display: 'flex' }}>
            {shop.products.map((p, i) => (
              <img
                src={p.image}
                style={{
                  maxHeight: 80,
                  maxWidth: 80,
                  marginLeft: i * (-8),
                  filter: 'greyscale(100%)',
                  '&:hover': {
                    filter: 'greyscale(0%)'
                  }
                }} />
            ))}
          </div>
        </CardActionArea>
      </Card>
    </div>
  )
}
