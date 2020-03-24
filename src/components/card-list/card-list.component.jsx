import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => {
    return(
    <div className='card-list'>
        {props.races.map(race => (
        <Card key={race.id} race={race}/>
      ))}</div>)
}
