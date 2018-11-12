
import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnFooter = cn('Footer');
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnFooter()];
                        const Footer = registry.get('Footer');

                        return <Footer />
                    }
                }
            </RegistryConsumer>
        )
    }
}