import React, { useState } from 'react'

import ReactMapGL, { Marker } from 'react-map-gl'
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded'

const token = 'pk.eyJ1IjoibWFyY3VzbG8iLCJhIjoiY2tjaGRvYnJxMGxnYzJ4bGl3N3dndm13NCJ9.dtmAg8NbFDHLSAXwlqmCXg'
export function Map ({ locations = [] }) {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: -33.84760,
    longitude: 151.18646,
    zoom: 12
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={token}
      mapStyle='mapbox://styles/marcuslo/ckchj1d8c1xf21imozx10oqwx'
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {locations.map((m, i) => (
        <Marker latitude={m.latitude} longitude={m.longitude}>
          <AddLocationRoundedIcon style={{ color: 'blue' }} />
        </Marker>
      ))}
    </ReactMapGL>
  )
}
