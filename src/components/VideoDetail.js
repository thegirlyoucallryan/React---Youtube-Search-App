
import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video){
        return <div> Loading...</div>

    }

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;


    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc} />
         
        </div>
        {/* <div className="title"> */}
        <div className="desc">
        <h4 className="header"> {video.snippet.title} </h4>
        <p className="description">{video.snippet.description}</p>
        </div>
        </div>
     


    )

    }
//title was coming back undefined/ or snippet  i was not destructuring video in the parameter.

export default VideoDetail