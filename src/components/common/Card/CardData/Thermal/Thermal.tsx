import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnThermal = cn('Thermal');
import './Thermal.css';

export interface ThermalProps {
    humidity: number;
    temperature: number;
}

export const Thermal: React.SFC<ThermalProps> = ({ temperature, humidity }) => {
    return (
        <div className={cnThermal()}>
            <div className={cnThermal('Temp')} > Температура:
          <span className="Temperature"> &nbsp;{temperature} С</span>
            </div>
            <div className={cnThermal('Humidity')} > Влажность:
          <span className="Humidity"> &nbsp; {humidity} %</span>
            </div>

        </div>
    )
}
