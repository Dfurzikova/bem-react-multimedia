import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { EventsContainer as EventsContainerCommon } from '../../common/EventsContainer/EventsContainer'; 
import { Card } from '../Card/Card';

import './EventsContainer.css';

const cnEventsContainer = cn('EventsContainer');

class EventsContainerClass extends React.Component {
    render() {
        return (
            <div className={cnEventsContainer()}>
               < Card />
            </div>
        )
    }
}

const EventsContainerRegistry = new Registry({ id: cn('EventsContainer')() });
EventsContainerRegistry.set('EventsContainer', EventsContainerClass);
EventsContainerRegistry.set('Card', Card);

export const EventsContainer = withRegistry(EventsContainerRegistry)(EventsContainerCommon);
