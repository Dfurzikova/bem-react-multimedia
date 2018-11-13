 import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Card as CardCommon } from '../../common/Card/Card';

import './Card.css';
const cnCard = cn('Card');

// class EventClass extends React.Component {
//     render() {
        
//             return (
//                 <div className={cnEvent()}>
//                     { events[0].type }
//                 </div>
//         )};

        
//     }

    export function CardFunc(){
        return <Card />
    }


const CardRegistry = new Registry({ id: cn('Card')() });
CardRegistry.set('Card', CardFunc);
// EventsContainerRegistry.set('Event', Event);

export const Card = withRegistry(CardRegistry)(CardCommon);
