import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnGraph = cn('Graph');
import './Graph.css';
import image from '../../../../../assets/Richdata.png'


export const Graph: React.SFC = (props) => {
    return (
        <img className={cnGraph()} src={image}/>
            

       
    )
}
