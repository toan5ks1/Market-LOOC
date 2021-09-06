import React from 'react';
import { Link } from 'react-router-dom';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className="item-title">{props.text}</p>
            <div className="item-infor">
                <label>{props.label}</label>
                <label class="item-heart"><FontAwesomeIcon icon={faHeart}/>{props.heart}</label>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
