import {
  Avatar,
    Box,
    Button,
    ButtonGroup,
    CardMedia,
    Link,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import ReactPlayer from "react-player";
  import ThumbUpIcon from "@mui/icons-material/ThumbUp";
  import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { fetchVideoData } from "../api";
import { WifiChannelOutlined } from "@mui/icons-material";
  
  function Player({ id }) {
    const [videoData, setVideoData] = useState(null);
    // const navigate = useNavigate();
    useEffect(() => {
      fetchVideoData(id).then((data) => {
        // console.log(data);
        
        setVideoData(data);
      });
    }, [id]);
    return (
      <Box sx={{ width: "100%" }}>
        <ReactPlayer
          width="100%"
          style={{ background: "black" }}
          playing
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />
        <Typography variant="h6" fontWeight="bold" mt="20px">
          {videoData?.title}
        </Typography>
        <Box>
          {videoData?.superTitle?.items?.map((keyword) => {
            return (
              <Link
                underline="none"
                sx={{ cursor: "pointer" }}
                to={`/${keyword}`}
              >
                {keyword} &nbsp;
              </Link>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center",mr:'20px' }}>
            <Tooltip title={videoData?.author?.title}>
              <Avatar />
              {/* <CardMedia
                component="img"
                image={videoData?.author?.avatar[0]?.url}
                alt="img"
                sx={{
                  width: "50px",
                  height: "50px",
                  marginRight: "20px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              /> */}
            </Tooltip>
            <Box sx={{ marginRight: "20px" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "-5px" }}
              >
                {videoData?.author?.title}
              </Typography>
              <Typography variant="subtitle2">
                {videoData?.author?.stats?.subscribersText}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ background: "black", borderRadius: "20px" }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
          <Box>
            <ButtonGroup
              variant="contained"
              style={{ borderRadius: "20px", background: "black" }}
            >
              <Button
                sx={{ background: "black", borderRadius: "20px" }}
                startIcon={<ThumbUpIcon />}
              >
                {videoData?.stats?.likes}
              </Button>
              <Button
                sx={{ background: "black", borderRadius: "20px" }}
                startIcon={<ThumbDownIcon />}
              ></Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default Player;
  