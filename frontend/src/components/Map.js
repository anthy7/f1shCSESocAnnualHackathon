import React, { useState } from 'react'

import ReactMapGL, { Marker } from 'react-map-gl'
import { Typography, Grid } from '@material-ui/core'
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded'
import StorefrontIcon from '@material-ui/icons/Storefront';

const token = 'pk.eyJ1IjoibWFyY3VzbG8iLCJhIjoiY2tjaGRvYnJxMGxnYzJ4bGl3N3dndm13NCJ9.dtmAg8NbFDHLSAXwlqmCXg'
export function Map ({ locations = [] }) {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: -33.85770,
    longitude: 151.18651,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={token}
      mapStyle='mapbox://styles/marcuslo/ckcrgv57k0uat1iqx1mg1y3iq'
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {locations.map((m, i) => (
        <Marker latitude={m.latitude} longitude={m.longitude}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{
            minWidth: 40,
            background: 'white',
            borderRadius: 8, 
            paddingLeft: 8, 
            paddingRight: 8
          }}>
            <Grid item>
              <StorefrontIcon style={{ color: 'black' }} />

            </Grid>
            <Grid item>
              <Typography variant='overline'>
              {m.name}
              </Typography>
            </Grid>
          
          </Grid>
        </Marker>
      ))}
    </ReactMapGL>
  )
}
