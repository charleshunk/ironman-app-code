import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    return(
        <div className='card-container'>
            <img className='card-logo' alt={props.race.name} src={props.race.logo}></img>
            <h1 key={props.race.id}>{props.race.name}</h1>
        </div>
    )
}