import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import { Window, Map } from '../components'
import { shops } from '../samples/shops'
import Box from '@material-ui/core/Box';

export function Landing() {

  return (
    <>
    <Box style= {{textAlign:"center",
    minHeight:150
  
    }}>
        Home
    </Box>
    <Box style= {{display: "flex", 
    justifyContent:"center"
    }}> 
      <Map locations={ 
        [
          {name: "North Sydney", latitude:  -33.83659, longitude: 151.20080}, 
          {name: "Newtown", latitude: -33.89988, longitude: 151.17145}, 
          {name: "Surry Hills", latitude: -33.88444, longitude: 151.20125}, 
          {name: "Lane Cove",latitude: -33.81801, longitude: 151.15625}
        ]
      }/>
    </Box>
    </>
  );
}

