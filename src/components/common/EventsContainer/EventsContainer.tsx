 //import * as React from 'react';
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnEventsContainer = cn('EventsContainer');
import './EventsContainer.css';
import Data from '../../../events.json'
import { ICardProps } from '../Card/Card.d';

const events: ICardProps[] = Data.events;

export class EventsContainer extends React.Component{    
    render() { 
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnEventsContainer()];
                        const EventsContainer = registry.get('EventsContainer');
                        const Card = registry.get('Card');
                        
                        return (
                            <EventsContainer >
                                        <Card />
                            </EventsContainer>
                        )

                    }
                }
            </RegistryConsumer>
        )
    }
}

