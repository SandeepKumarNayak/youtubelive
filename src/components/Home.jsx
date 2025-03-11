import React, { useState, useEffect, Suspense } from "react";
import { fetchHomeData } from "../api";
const Videos = React.lazy(() => import("./Videos"));
import SideBar from "./SideBar";
import { Button, Stack } from "@mui/material";

function Home() {
  const [videos, setVideos] = useState([]);
  // const [cursor, setCursor] = useState(null);

  // const handleLoadMore = React.useCallback(() => {
  //   fetchHomeData(cursor).then((data) => {
  //     const { contents } = data;
  //     setCursor(data?.cursorNext);
  //     setVideos(prev => [...prev, ...contents]);
  //   });
  // }, [cursor]);

 

 useEffect(()=>{
  fetchHomeData().then((data) => {
    const { contents } = data;
    // setCursor(data?.cursorNext);
    setVideos(prev => [...prev, ...contents]);
  });
 },[])

  return (
    <Stack direction="row">
      <SideBar />
      <Suspense fallback={<p style={{width:'500px',height:'500px',background:'black'}}>Loading...</p>}>
        <Videos videos={videos} />
      </Suspense>
    </Stack>
  );
}export default Home;
