import * as React from 'react';
import { cn, classnames } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Header as HeaderCommon } from '../../common/Header/Header';
import logo1x from '../../../assets/logo1x.png';
import logo2x from '../../../assets/logo2x.png';
import './Header.css';

const cnHeader = cn('Header');


class HeaderClass extends React.Component {
    render() {
        return (
            <nav className={cnHeader()}>
                <img className={cnHeader('logo')} src={logo1x} srcSet={logo2x + ' 2x'} />
                {/* <HeaderMenu /> */}
            </nav>
        )
    }
}

const HeaderRegistry = new Registry({ id: cn('Header')() });
HeaderRegistry.set('Header', HeaderClass);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);