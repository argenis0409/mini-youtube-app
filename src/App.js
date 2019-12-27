import React, { Component } from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import Search from './components/Search';
import Details from './components/Details';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (searchItem) => {
    const response = await youtube.get('search', { 

      params: {
        part: 'snippet',
        maxResults: '5',
        key: process.env.API_KEY,
        q: searchItem,
      }
    });
   this.setState({
     videos: response.data.items, selectedVideo: response.data.items[0]
   })
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
