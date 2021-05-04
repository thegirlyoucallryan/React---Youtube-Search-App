import React from 'react'
import './VideoItem.css'


const VideoItem = ({video, onVideoSelect})=> {
    return (
    <div onClick={() => onVideoSelect(video)} className="video item"> 
        <img  className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div className="header"> {video.snippet.title} </div>
        </div>
        
          </div>
    )////this callback function (onclick) Onvideoselect, passes video from child back up to parent(app)
}

export default VideoItem