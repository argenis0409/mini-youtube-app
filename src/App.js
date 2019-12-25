import React, { Component } from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import Search from './components/Search';
import Details from './components/Details';

export default class App extends Component {
  render() {
    return (
      <Grid justify='center' container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
            <Search onFormSubmit={this.handleSubmit} />
            </Grid>
              <Grid item xs={8}>
                <Details />
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
