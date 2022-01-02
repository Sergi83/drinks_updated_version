import React from 'react';
import LoadingAnimation from './LoadingAnimation';

// pass type (props) from LoadingList and LoadingItem components
const Loading = ({ type }) => {

    // .loader:
    // 1) relative position (.animation-wrapper has position absolute), if not - shimmer effect oriented on browser's window (not Loading elements)
    // 2) overflow hidden - shimmer effect just inside Loading elements
    const classes = `loader ${type}`;
    
    return (
        <div className={classes} >
            <LoadingAnimation />
        </div>
    );
};

export default Loading;
