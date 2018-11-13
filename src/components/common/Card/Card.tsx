import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import stats from '../../../assets/stats.svg'
const cnCard = cn('Card');
const cnIcon = cn('Icon');
const cnSubtitle = cn('Subtitle')
import {CardData} from '../Card/CardData/CardData'


import { ICardProps } from '../Card/Card.d';

import { ICardData } from '../Card/Card.d';
import {Thermal} from '../Card/CardData/Thermal/Thermal'

import './Card.css';

const Card: React.SFC<ICardProps> = ({ type, size, icon, title, source, time, description, data }) => (
    <article className={cnCard({ size: size,  type: type  } )}> 
        <div className={cnCard('Header')}>
            <div className={cnIcon({ type: 'close' })}></div>
            <div className={cnCard('Event')}>
            <img className={cnCard('Icon', ['Image'])} src={`../../assets/${icon}.svg`} /> 
                <h1 className={cnCard('Title')}>{title}</h1>
            </div>
            <div className={cnCard('Subtitle', ['Subtitle'])} >
                <div className={cnSubtitle('Source')}>{source}</div>
                <div className={cnSubtitle('Date')}>{time}</div>

            </div>

        </div>
        <div className={cnCard('Content')}>
            <div className={cnCard('Description')}>
                {description}
            </div>
            
            {data && <CardData data={data} icon={icon}/>}
            {/* <Thermal/> */}
           
        </div>
    </article>
);

export { Card, cnCard };
