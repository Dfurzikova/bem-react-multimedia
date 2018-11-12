import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnPage = cn('Page');
import './Page.css'

export class Page extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {registries => {

                    const registry = registries[cnPage()];
                    const Header = registry.get('Header');
                    const Content = registry.get('Content');
                    const Footer = registry.get('Footer');

                    return (
                        <div className="Page">
                            <Header />
                            <Content />
                            <Footer />
                        </div>)

                }}
            </RegistryConsumer>)
    }
}
