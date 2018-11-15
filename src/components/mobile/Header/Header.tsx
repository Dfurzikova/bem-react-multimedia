import * as React from 'react';
import { cn, classnames } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Header as HeaderCommon } from '../../common/Header/Header';
 import logo1x from '../../../assets/logo1x.png';
 import logo2x from '../../../assets/logo2x.png';

import './Header.css';
import { TopMenu } from '../TopMenu/TopMenu';
const cnHeader = cn('Header');
import { IconBurger} from '../IconBurger/IconBurger'


class HeaderClass extends React.Component {
    render() {
        return (
            <nav className={cnHeader()}>
                <img className={cnHeader('logo')} src={logo1x} srcSet={logo2x + ' 2x'} />
                <IconBurger />
                <TopMenu />
            </nav>
        )
    }
}

const HeaderRegistry = new Registry({ id: cn('Header')() });
HeaderRegistry.set('Header', HeaderClass);
HeaderRegistry.set('TopMenu', TopMenu);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);