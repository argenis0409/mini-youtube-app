import React, { Component } from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
   <Grid justify='center' container spacing={16}>
     <Grid item xs={12}>
       <Grid container spacing={16}>
        <Grid item xs={12}>
         {/* {more coming soon} */}
        </Grid>
          <Grid item xs={8}>
            {/* {more coming soon} */}
          </Grid>
          <Grid item xs={4}>
            {/* {video here} */}
          </Grid>
       </Grid>
     </Grid>
   </Grid>
    )
  }
};

export default App;
