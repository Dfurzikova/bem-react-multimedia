import { Registry, withRegistry } from '@bem-react/di';
import { Card as CardCommon } from '../../common/Card/Card';
import { cn } from '@bem-react/classname';

import './Card.css'
import {ICardProps} from '../../common/Card/Card.d';

import { Thermal } from '../../common/Card/CardData/Thermal/Thermal'
// import { Music } from '../../common/Card/CardData/Music/Music'



const CardRegistry = new Registry({ id: cn('Card')() });
 CardRegistry.set('Card', CardCommon);

 CardRegistry.set('Thermal', Thermal);
//  CardRegistry.set('Music', Music);
// EventsContainerRegistry.set('Event', Event);

export const Card = withRegistry<ICardProps>(CardRegistry)(CardCommon);




// import { Thermal } from '../../common/Card/CardData/Thermal/Thermal'

// //export {EventsContainer}


// const EventsContainerRegistry = new Registry({ id: cn('EventsContainer')() });
// EventsContainerRegistry.set('EventsContainer', EventsContainerCommon);
// EventsContainerRegistry.set('Thermal', Thermal);

// export const EventsContainer = withRegistry(EventsContainerRegistry)(EventsContainerCommon);
