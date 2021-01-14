import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../APIs/YouTube';
import VideoList from './VideoList';

class App extends React.Component {

    state = {
        videos: []
    }

    onTermSubmit = async term => {
        const resp = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: resp.data.items})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;