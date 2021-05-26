import React, {useState, useEffect} from 'react';

import  './App.css'
import SearchBar from './SearchBar';
import useVideos from '../hooks/useVideos';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const App = () => {
    const [videos, search] = useVideos('press to handstand workouts')
    const [selectedVideo, setSelectedVideo] = useState(null);

   useEffect(() => {
       setSelectedVideo(videos[0])
   }, [videos]);
    

   
        
         
    
 



    return (
        <div><h1>YouTube Video Search</h1>
        <div>
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
        <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        
        </div>
        
        </div>
        </div>
        </div>
        </div>
        )
    };





export default App;


//when passing one argument ex. onVideoSelect={(video) => setSelectedVideo(video)} is equal to setSelectedVideo. react video 211 steven grider
//data fetching code is good to use custom hooks for ie. the get( above) in onquerysubmit