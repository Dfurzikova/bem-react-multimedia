import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Card } from '../Card/Card';
import * as Data from '../../../events.json'
import './EventsContainer.css';
import { ICardProps } from '../../common/Card/Card.d';

const events: ICardProps[] = Data.events;
const cnEventsContainer = cn('EventsContainer');

export interface EventsContainerProps {
    className?: string;
}

const Cards = events.map((event) =>
    <Card
        key={event.title}
        type={event.type}
        size={event.size}
        icon={event.icon}
        title={event.title}
        source={event.source}
        time={event.time}
        description={event.description}
        data={event.data}
    />)

export const EventsContainer: React.SFC<EventsContainerProps> = (props) => (
    <div className={cnEventsContainer()}>
        {Cards}
    </div>
);
