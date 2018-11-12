import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnEventsContainer = cn('EventsContainer');
import './EventsContainer.css';

export class EventsContainer extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnEventsContainer()];
                         const EventsContainer = registry.get('EventsContainer');
                        // const TopMenu = registry.get('TopMenu');
                        return  <EventsContainer />
                    }
                }
            </RegistryConsumer>
        )
    }
}