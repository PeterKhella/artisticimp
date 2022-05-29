import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>New Merch</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        url="/images/logo1.png"
                        text="Super Restore Poster"
                        label="Poster"
                        path="./images/logo1.png"

                        
                        />
                    </ul>
                </div>
            </div>
        <img src='./images/logo1.png'></img>
        </div>
    )
}

export default Cards
