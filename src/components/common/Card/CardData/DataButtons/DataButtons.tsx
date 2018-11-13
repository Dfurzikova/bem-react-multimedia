import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnDataButtons = cn('DataButtons');
const cnButton = cn('Button');
import './DataButtons.css';

export const DataButtons: React.SFC = (props) => {
    return (
        <div className={cnDataButtons()}>
        <div className={cnButton( { active: true }, ['DataButtons-Position'] )} >Да</div>
        <div className={cnButton( null, ['DataButtons-Position'])} >Нет</div>
        
        </div>
    )
}
