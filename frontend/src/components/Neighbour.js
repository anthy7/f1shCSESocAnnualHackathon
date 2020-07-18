import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider } from '@material-ui/core'
import { Palette } from 'react-palette'


export function Neighbour({ shop }) {
  const shadow = '0 41.8px 33.4px rgba(0, 0, 0, 0.086)'
  
  return (
    <div>
      <Card elevation={0} style={{ width: 300, height: 200, boxShadow: shadow, borderRadius: 8 }}>
        <CardActionArea style={{ height: '100%', display: 'flex' }}>
          <Palette src={shop.products[0].image}>
            {({ data, loading, error }) => (
            <CardContent style={{ paddingLeft: 64, position: 'absolute', top: 0, background: data?.lightMuted, width: '100%', transition: 'all 0.2s ease' }}>
              <div>
                <Typography variant='overline' style={{ color: data?.darkMuted, transition: 'all 0.2s ease', fontWeight: 700 }}>Have you visited our neighbour,</Typography>
              </div>
              <div>
                <Typography variant='overline' style={{ fontSize: 18, lineHeight: 1.2, color: data?.darkMuted, transition: 'all 0.2s ease', fontWeight: 700 }}>{shop.name}?</Typography>
              </div>
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
