import * as React from 'react';

import './Header.css';

import { classnames, cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

// export class Header extends React.Component<{}, { isOpen: boolean }> 
export class Header extends React.Component{
    render() {
        const cnHeader = cn('Header');
        const cnHeaderMenu = cn('HeaderMenu');

        return (
            <RegistryConsumer>
                    {
                        registries => {
                            const registry = registries[cnHeader()];
                            const Header = registry.get('Header');
                            
                            return <Header /> 
                        }
                    }
                </RegistryConsumer>
        )
    }
}