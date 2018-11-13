import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnCameraImage = cn('CameraImage');
import './CameraImage.css';

export const CameraImage: React.SFC = (props) => {
    return (
        <img className={cnCameraImage()} src={'assets/image.jpg'}/>
    )
}
