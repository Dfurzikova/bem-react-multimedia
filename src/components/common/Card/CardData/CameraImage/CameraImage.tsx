import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnCameraImage = cn('CameraImage');
import './CameraImage.css';
import image from '../../../../../assets/image.jpg'

export const CameraImage: React.SFC = (props) => {
    return (
        <img className={cnCameraImage()} src={image}/>
    )
}
