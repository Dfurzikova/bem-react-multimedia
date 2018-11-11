import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnPage = cn('Page');
const cnHeader = cn('Header');

import './Page.css'

export class Page extends React.Component {
    render() {
        return <RegistryConsumer>
            {registries => {
               
                const registry = registries[cnPage()];
                const Header = registry.get('Header');
                // const Content = Page.get<IContentProps>('Content');
                // const Footer = Page.get('Footer');
              
                 return  <div className="Page"> <Header /> </div>
                 

            }}
        </RegistryConsumer>;
    }
}
