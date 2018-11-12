import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { EventsContainer as EventsContainerCommon } from '../../common/EventsContainer/EventsContainer'; 

import './EventsContainer.css';

const cnEventsContainer = cn('EventsContainer');

class EventsContainerClass extends React.Component {
    render() {
        return (
            <div className={cnEventsContainer()}>
               
            </div>
        )
    }
}

const EventsContainerRegistry = new Registry({ id: cn('EventsContainer')() });
EventsContainerRegistry.set('EventsContainer', EventsContainerClass);
// EventsContainerRegistry.set('Event', Event);

export const EventsContainer = withRegistry(EventsContainerRegistry)(EventsContainerCommon);
