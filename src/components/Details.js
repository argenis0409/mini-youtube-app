import React from 'react'
import { Paper, Typography } from '@material-ui/core';

const Details = ({ video }) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
     <>
     <Paper elevation={6} style={{height: '70%'}}>
       <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
     </Paper>
     <Paper elevation={6} style={{padding: '15px'}}>
         
     </Paper>
     </>
    )
}

export default Details;
