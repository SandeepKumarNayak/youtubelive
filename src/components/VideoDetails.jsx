import { Box, Grid, Stack } from '@mui/material'
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
      <Stack container sx={{flexDirection:{xs:'column',sm:'column',md:'row'}}} gap={2} padding={2} >
        <Grid  item>
            <Player id={id} />
        </Grid>
        <Grid sm={4}  item>
           {
            videos && videos.map((video, indx) => {
              return (
                 
                  <VideoCard key={indx} video={video} sideVideo={true} />
              )
            })
           }
        </Grid>
      </Stack>
    </Box>
  )
}

export default VideoDetails
