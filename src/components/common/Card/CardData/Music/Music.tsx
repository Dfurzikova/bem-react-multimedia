import * as React from 'react';
import { cn } from '@bem-react/classname';
import image from '../../../../../assets/Prev.svg'
const cnMusic = cn('Music');
import './Music.css';

export interface MusicProps {
        albumcover?: string;
        artist?: string;
        name?: string;
        length?: string;
        track?: { name: string; length: string; };
        volume?: number;
    }
   
export const Music: React.SFC<MusicProps> = ({albumcover, artist, length, name, volume}) => {
    return (<div className={cnMusic()}>
        <div className={cnMusic(null, ['Card-Music'])}>
        <div className={cnMusic('SongInfo')}> 
            <img className={cnMusic('AlbumCover')} src={albumcover} /> 
            <div className={cnMusic('Title')}> { artist + ' - ' + name } </div>
            <div className={cnMusic('Title')}>
                <input className={cnMusic('DurationInput')} type="range" defaultValue="10"
                    min="0" max="100" step="10"  ></input>
                <div className={cnMusic('SongDuration')}>{length}</div>
            </div>
        </div>
        <div className={cnMusic('Controls')}>
            <img className={cnMusic('ButtonLeft')} src={image} />
            <img className={cnMusic('ButtonRight')} src={image}  />
            <input className={cnMusic('VolumeControl')} type="range" defaultValue="10" min="0"
                max="100" step="10" />
            <div className={cnMusic('VolumeRate')}>{volume}%</div>
        </div>
    </div>
    </div>
    )
}


                  
            
