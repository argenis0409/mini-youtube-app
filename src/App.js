import React, { useState } from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import Search from './components/Search';
import Details from './components/Details';
import List from './components/List';

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Search onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <Details video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <List videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
    async function handleSubmit(searchTerm) {
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: process.env.API_KEY,
          q: searchTerm,
        }
      });
  
      setVideos(videos);
      setSelectedVideo(videos[0]);
    }
};
