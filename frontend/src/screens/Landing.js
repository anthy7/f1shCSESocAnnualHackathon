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
    <Box> 
      <Map/>
    </Box>
    </>
  );
}

