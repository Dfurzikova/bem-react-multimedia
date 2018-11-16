import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnHeader = cn('Header');
import './Header.css';

export class Header extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnHeader()];
                         const Header = registry.get('Header');
                        const TopMenu = registry.get('TopMenu');
                        return <Header > <TopMenu /></Header>
                    }
                }
            </RegistryConsumer>
        )
    }
}