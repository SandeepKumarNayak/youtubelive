import React, { useEffect, useState } from 'react'
import Videos from './Videos';
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchSearchData } from '../api';
import SideBar from './SideBar';

function SearchData() {
    const [videos, setVideos] = useState([]);
    const params = useParams();
    const {key} = params;
    useEffect(()=>{
        fetchSearchData(key).then((data)=>{
            const {contents} = data;
            setVideos(contents);
        })
    },[key])
  return (
    <Stack direction='row' width="100%">
    <SideBar/>
   <Videos videos = {videos} /> 
    
 </Stack>
  )
}

export default SearchData
