import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Thermal } from './Thermal/Thermal';
import { Music } from './Music/Music';
import { Graph } from './Graph/Graph'
import { DataButtons } from './DataButtons/DataButtons'
import { CameraImage } from './CameraImage/CameraImage'

const cnCard = cn('Card');

import { ICardData } from '../../Card/Card.d'
export interface IEventItemDataProps extends ICardData {
    data: ICardData | null;
    icon?: string;
}

export const CardData: React.SFC<IEventItemDataProps> = ({ data, icon }) => {
    console.log(icon);
    return (
        <div className={cnCard('Data')}>
            {icon === 'thermal' && data && data.humidity && data.temperature &&
                <Thermal humidity={data.humidity} temperature={data.temperature} />
            }

            {icon === 'music' && data && data.track &&
                <Music
                    albumcover={data.albumcover}
                    artist={data.artist}
                    name={data.track.name}
                    length={data.track.length}
                    volume={data.volume} />
            }

            
            { icon === 'stats' && <Graph />}

            { icon === 'fridge' && <DataButtons /> }
            
            {icon === 'cam'  && <CameraImage/>}
        </div>
    );
}


// <div className={cnCard('Data')}>
{/* {icon === 'stats' && <Graph />} */ }
{/* {icon === 'thermal' && data && data.humidity && data.temperature && 
   <Thermal humidity={data.humidity} temperature={data.temperature}/>
 } */}
{/* {icon === 'cam' && data && <Camera link={data.image}/>}
 {
   icon === 'fridge' && btn && 
   <div className={cnEventItem('ButtonArea')}>
     {btn}
   </div>
 } */}
{/* {icon === 'music' && data && name && data.track && <Music  
     albumcover={data.albumcover} 
     artist={data.artist}
     name={data.track.name}
     length={data.track.length}
     volume={data.volume}/>
 } */}
{/* {icon === 'music' && data && data.humidity && data.temperature && 
 <Thermal humidity={data.humidity} temperature={data.temperature}/>
} */}
//</div>