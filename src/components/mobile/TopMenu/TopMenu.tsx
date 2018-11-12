import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { TopMenu as TopMenuCommon } from '../../common/TopMenu/TopMenu';

import './TopMenu.css';

const cnTopMenu = cn('TopMenu');

class TopMenuClass extends React.Component {
    render() {
        return (
            <ul className={cnTopMenu(null, ['Header-TopMenu'])}>
                <li className={cnTopMenu('Item', { active: true })}>
                    <a className="Link" href="#">События</a>
                </li>
                <li className={cnTopMenu('Item')}>
                    <a className="Link" href="#">Сводка</a>
                </li>
                <li className={cnTopMenu('Item')}>
                    <a className="Link" href="#">Устройства</a>
                </li>
                <li className={cnTopMenu('Item')}>
                    <a className="Link" href="#">Сценарии</a>
                </li>
                <li className={cnTopMenu('Item')}>
                    <a className="Link" href="#">Видеонаблюдение</a>
                </li>
            </ul>
        )
    }
}

const TopMenuRegistry = new Registry({ id: cn('TopMenu')() });
TopMenuRegistry.set('TopMenu', TopMenuClass);

export const TopMenu = withRegistry(TopMenuRegistry)(TopMenuCommon);
