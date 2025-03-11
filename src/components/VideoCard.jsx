import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Tooltip,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function VideoCard({ video,sideVideo }) {
 
  // console.log(video);
  const navigate = useNavigate();
  return (
    <Stack data-aos="zoom-in-up" width='100%' sx={{mb:sideVideo?'5px':'0'}} >
      <Card sx={{boxShadow:'none'  , display:'flex',flexDirection: sideVideo ? 'row': 'column',alignItems:'center'}}>
        <Box
          sx={{ cursor: "pointer",width:sideVideo?'auto':'100%' }}
          onClick = {()=> navigate(`/watch/${video?.video?.videoId}`)}
        >
          <CardMedia
            component="img"
            image={video?.video?.thumbnails[0]?.url}
            alt="img"
            sx={{ borderRadius:sideVideo?'0':'10px', height: sideVideo ? '100px':'auto',width:sideVideo ? '170px':'100%',transition:'all 0.2s ease', '&:hover': {
              borderRadius:sideVideo?'10px':'0px',
           } }}
          />
        </Box>
        <CardContent sx={{display:'flex', width: '100%',marginLeft:sideVideo?'10px':'0' ,padding:'0',marginTop:'5px'}}>
          {
            !sideVideo &&
          <Link underline="none"  
          href={`/channel/${video?.video?.author?.channelId}`} sx={{mr:'10px', cursor:'pointer' }}>
            <Tooltip title={video?.video?.author?.title}>

            <CardMedia component="img" image= {video?.video?.author?.avatar[0]?.url} sx={{width:'40px',height:'40px',borderRadius:'50%' }} alt="channel" />
            </Tooltip>
          </Link>
          }
        <Link
          underline="none"
          sx={{ cursor: "pointer" }}
          href={`/watch/${video?.video?.videoId}`}
        >
          <Typography
            fontSize="small"
            fontWeight="bold"
            color="black"
            variant="h6"
          >
            {video?.video?.title?.substring(0,50)}
          </Typography>
          <Typography fontSize="small" color="gray" variant="h6">
            {video?.video?.author?.title}
          </Typography>
          <Typography fontSize="small" color="gray" variant="h6">
            <Typography variant="span">
              {video?.video?.stats?.views} views{" "}
            </Typography>
            <Typography variant="span">
              {video?.video?.publishedTimeText}
            </Typography>
          </Typography>
        </Link>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default VideoCard;
