import * as React from 'react';
import { cn } from '@bem-react/classname';

import './IconBurger.css';

const cnIconBurger = cn('IconBurger');

export function IconBurger(){
    return(
        <div className={cnIconBurger()}>
        </div>
    )
}
