import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnContent = cn('Content');
import './Content.css';

export class Content extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnContent()];
                        const Content = registry.get('Content');
                        const EventsContainer = registry.get('EventsContainer');
                        
                        return  <Content> <EventsContainer /></Content>
                    }
                }
            </RegistryConsumer>
        )
    }
}