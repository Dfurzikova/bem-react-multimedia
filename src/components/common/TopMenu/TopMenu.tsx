import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnTopMenu = cn('TopMenu');
import './TopMenu.css';

export class TopMenu extends React.Component{
    render() {
        return (
            <RegistryConsumer>
                    {
                        registries => {
                            const registry = registries[cnTopMenu()];
                            const TopMenu = registry.get('TopMenu');

                            return <TopMenu /> 
                        }
                    }
                </RegistryConsumer>
        )
    }
}