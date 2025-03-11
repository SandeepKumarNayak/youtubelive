import { Box, Grid } from '@mui/material'
import React, { useEffect,useState } from 'react'
 
import { useParams } from 'react-router-dom'

import VideoCard from './VideoCard';
import {  fetchVideoRelatedData } from '../api';
import Player from './Player';


function VideoDetails() {
    const {id} = useParams();
    

    const [videos, setVideos] = useState([]);
    useEffect(()=>{
      fetchVideoRelatedData(id).then((data) => {
        const {contents} = data;
        setVideos(contents);
      })
    },[id])
  return (
    <Box sx={{position:'relative', top:'60px',background:'white'}}>
      <Grid container sx={{justifyContent:'center'}} columnGap={6}>
        <Grid sm={6} item>
            <Player id={id} />
        </Grid>
        <Grid sm={4} item>
           {
            videos && videos.map((video, indx) => {
              return (
                 
                  <VideoCard key={indx} video={video} sideVideo={true} />
              )
            })
           }
        </Grid>
      </Grid>
    </Box>
  )
}

export default VideoDetails
