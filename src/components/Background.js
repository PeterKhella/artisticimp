import React from 'react';
import './App';
import { Button } from './Navbar/Button';
import './Background.css';

function Background() {
    return (
        <div className='bg-container'>
            {/* <video autoplay loop muted playsinline id="video-background"  src='../videos/video-3.mp4'></video> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='bg-btns'>
                <Button
                    className='btn'
                    buttonStyles='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btn'
                    buttonStyles='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far
                    fa-play-circle' />
                </Button>
            </div>


        </div>
    );
}

export default Background