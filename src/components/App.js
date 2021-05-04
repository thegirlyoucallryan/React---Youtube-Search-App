import React from 'react'
import ReactDOM from 'react-dom'
import  './App.css'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    onQuerySubmit = async (query) => {
       const response = await youtube.get('/search', {
            params: {
                q: query
            }
        })
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state)
        
    };

    onVideoSelect = (video) => {
        console.log('from the app', video)
        this.setState({selectedVideo: video});
    };

    render(){

      
        return (
        <div><h1>YouTube Video Search</h1>
        <div>
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        Ryan found {this.state.videos.length} videos!
        </div>
        
        </div>
        </div>
        </div>
        </div>
        )

    
        
    }
}

export default App;