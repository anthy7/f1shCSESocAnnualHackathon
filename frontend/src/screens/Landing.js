import React from 'react';

import { Map } from '../components'
import Box from '@material-ui/core/Box';

export function Landing({ setLocal = () => {} }) {
  setLocal(null)
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ overflow: 'hidden', borderRadius: 8 }}>
        <Map locations={
          [
            { name: 'North Sydney', latitude: -33.83659, longitude: 151.20080 },
            { name: 'Newtown', latitude: -33.89988, longitude: 151.17145 },
            { name: 'Surry Hills', latitude: -33.88444, longitude: 151.20125 },
            { name: 'Lane Cove', latitude: -33.81801, longitude: 151.15625 }
          ]
        } />
      </div>
    </Box>
  )
}

