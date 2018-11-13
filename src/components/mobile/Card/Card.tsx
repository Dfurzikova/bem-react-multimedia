import { Registry, withRegistry } from '@bem-react/di';
import { Card as CardCommon } from '../../common/Card/Card';
import { cn } from '@bem-react/classname';

import './Card.css'
import {ICardProps} from '../../common/Card/Card.d';

const CardRegistry = new Registry({ id: cn('Card')() });
 CardRegistry.set('Card', CardCommon);


export const Card = withRegistry<ICardProps>(CardRegistry)(CardCommon);
