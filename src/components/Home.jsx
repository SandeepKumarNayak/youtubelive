import React, { useState, useEffect, Suspense } from "react";
import { fetchHomeData } from "../api";
const Videos = React.lazy(() => import("./Videos"));
import SideBar from "./SideBar";
import { Stack } from "@mui/material";

function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchHomeData().then((data) => {
      const { contents } = data;
      setVideos(contents);
    });
  }, []);
  return (
    <Stack direction="row">
      <SideBar />
      <Suspense fallback={<p style={{width:'500px',height:'500px',background:'black'}}>Loading...</p>}>
        <Videos videos={videos} />
      </Suspense>
    </Stack>
  );
}

export default Home;
