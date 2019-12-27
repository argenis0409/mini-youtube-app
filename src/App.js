import React, { Component } from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import Search from './components/Search';
import Details from './components/Details';

export default class App extends Component {

  handleSubmit = async (searchItem) => {
    const response = await youtube.get('search', { 

      params: {
        part: 'snippet',
        maxResults: '5',
        key: '[API_KEY]',
        q: searchItem,
      }
    });
    console.log(response)
  }

  render() {
    return (
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
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
