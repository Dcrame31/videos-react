import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../APIs/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async term => {
        const resp = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: resp.data.items})
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                <VideoDetail video={this.state.selectedVideo} />
            </div>
        );
    }
}

export default App;