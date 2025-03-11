import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Aos from 'aos'
import { Suspense, useEffect, lazy } from 'react'

const VideoDetails = lazy(()=> import("./components/VideoDetails"));
const Home = lazy(()=> import("./components/Home"));
const SearchData= lazy(()=> import("./components/SearchData")); 

function App() {
  const initAos = () => {
    Aos.init({
      once: true, // animations occur only once
      disable: 'mobile' // disable on mobile devices
    });
  }
  
  useEffect(() => {
    initAos();
  }, []);

  return (
   <BrowserRouter>
    <Navbar />
    <Suspense fallback={<p>Loading...</p>}>

    <Routes>
      <Route path='/watch/:id' element={<VideoDetails />} />
      <Route path='/' element={<Home />} />
      <Route path='/search/:key' element={<SearchData />} />
    </Routes>
    </Suspense>
   </BrowserRouter>
  )
}

export default App
