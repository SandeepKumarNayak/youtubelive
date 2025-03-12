import { Box, Grid } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'



const Videos = ({videos}) => {
  
  return (
    <Grid width="100%" rowSpacing={2} position="relative" top="10px" pt="20px" pr="20px" left="30px" columnSpacing={2}  container m={4}>
      {
        videos  ? (videos.map((video,indx) => {
          return (
              <Grid key={indx} xl={3}  md={4} sm={6} xs={12}  item>
                <VideoCard   key={video?.videoId} video = {video} />
              </Grid>
          )
        }) ) :<Box sx={{display:'flex', width:'100%',height:'95vh', justifyContent:'center',alignItems:'center',fontSize:'20px'}}>Loading...</Box>
      }
    </Grid>
    
  )
}

export default Videos
