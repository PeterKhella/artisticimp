import React from 'react';
import './Cards.css'
// import { Link } from 'react-router-dom';    //NOT WORKING????

function CardItem(props) {
  return (
    <div>
      <li className='cards__item'>
        {/* Link tag not working???? */}
        <a href={props.path} className="cards__item__link">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Product Image'
              className='cards__items__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>

        </a>
      </li>
    </div>
  )
}

export default CardItem