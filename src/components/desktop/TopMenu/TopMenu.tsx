import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { TopMenu as TopMenuCommon } from '../../common/TopMenu/TopMenu';

import './TopMenu.css';
import '../../common/Link/Link.css';

const cnTopMenu = cn('TopMenu');
const cnLink =  cn('Link');

class TopMenuClass extends React.Component {
    render() {
        return (
                    <ul className={cnTopMenu(null, ['Header-TopMenu'])}>
                        <li className={cnTopMenu('Item', { active: true })}>
                            <a className={cnLink()} href="#">События</a>
                        </li>
                        <li className={cnTopMenu('Item')}>
                            <a className={cnLink()} href="#">Сводка</a>
                        </li>
                        <li className={cnTopMenu('Item')}>
                            <a className={cnLink()} href="#">Устройства</a>
                        </li>
                        <li className={cnTopMenu('Item')}>
                            <a className={cnLink()} href="#">Сценарии</a>
                        </li>
                        <li className={cnTopMenu('Item')}>
                            <a className={cnLink()} href="#">Видеонаблюдение</a>
                        </li>
                    </ul>
        )
    }
}

const TopMenuRegistry = new Registry({ id: cn('TopMenu')() });
TopMenuRegistry.set('TopMenu', TopMenuClass);

export const TopMenu = withRegistry(TopMenuRegistry)(TopMenuCommon);
