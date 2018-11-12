import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Footer as FooterCommon } from '../../common/Footer/Footer'; 
import './Footer.css';
import '../../common/Link/Link.css';

const cnFooter = cn('Footer');
const cnLink = cn('Link')

class FooterClass extends React.Component {
    render() {
        return (
            <div className={cnFooter()}>
            <div className={cnFooter('Items')}>
                <a className={cnLink({ footer: true} )} href="#">Помощь</a>
                <a className={cnLink({ footer: true} )} href="#">Обратная связь </a>
                <a className={cnLink({ footer: true} )} href="#">Разработчикам</a>
                <a className={cnLink({ footer: true} )} href="#">Условия использования</a>
            </div>

            <div className={cnFooter('Copyright')}>© 2001–2017 ООО «Яндекс»</div>

        </div>
        )
    }
}

const FooterRegistry = new Registry({ id: cn('Footer')() });
FooterRegistry.set('Footer', FooterClass);

export const Footer = withRegistry(FooterRegistry)(FooterCommon);
