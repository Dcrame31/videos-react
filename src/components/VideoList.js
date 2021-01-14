import React from 'react';

const VideoList = ({videos}) => {
    const vidNum = videos.length
    return (
        <div>
            {vidNum}
        </div>
    )
};

export default VideoList;