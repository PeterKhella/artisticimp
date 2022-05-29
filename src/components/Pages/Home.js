import React from 'react';
import '../App';
import { Button } from '../Navbar/Button';
import '../Pages/Background.css';
import Cards from '../Cards';
import Background from './Background';

function Home() {
    return (
        <div className='bg-container'>
            {/* <video autoplay loop muted playsinline id="video-background"  src='../videos/video-3.mp4'></video> */}
            <Background />
            {/* <Cards /> */}
        </div>
    )
}

export default Home;