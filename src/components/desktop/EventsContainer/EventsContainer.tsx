import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { EventsContainer as EventsContainerCommon } from '../../common/EventsContainer/EventsContainer';
import {Card} from '../Card/Card'
import './EventsContainer.css';
//const EventsContainer = EventsContainerCommon;
import { Thermal } from '../../common/Card/CardData/Thermal/Thermal'
// import { Music } from '../../common/Card/CardData/Music/Music'

const EventsContainerRegistry = new Registry({ id: cn('EventsContainer')() });
EventsContainerRegistry.set('EventsContainer', EventsContainerCommon);
EventsContainerRegistry.set('Card', Card);
EventsContainerRegistry.set('Thermal', Thermal);
// EventsContainerRegistry.set('Music', Music);

export const EventsContainer = withRegistry(EventsContainerRegistry)(EventsContainerCommon);
