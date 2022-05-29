import React from 'react';
import '../App';
import { Button } from '../Navbar/Button';
import './Background.css';

function Background() {
    return (
        <div className='bg-container'>
        {/* <video autoplay loop muted playsinline id="video-background"  src='../videos/video-3.mp4'></video> */}
        <h1>Site Under Construction</h1>
        <h2>In the mean time, please visit our Etsy Store</h2>
        <h1>THE ADVENTURE AWAITS</h1>
        <div className='bg-btns'><a href="https://www.etsy.com/se-en/shop/ArtisticimpShop">
            <Button
                className='btn'
                buttonStyles='btn--primary'
                buttonSize='btn--large'
                >
                SHOP NOW <i className='fa
                        fa-cart-shopping' />
            </Button>
            </a>
        </div>
        <h2>What are you waiting for?</h2>
        </div>
    );
}

export default Background