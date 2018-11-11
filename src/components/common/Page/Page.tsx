import * as React from 'react';

import './Page.css';

// Get Page-part
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const BodyCN = cn('Body');
const PageCN = cn('Page');

// Static block
export function Page() {
    return (
        <RegistryConsumer>
            {
                registries => {
                    const Page = registries[PageCN()].get(BodyCN());
                    
                    return <Page />;
                } 
            }
        </RegistryConsumer>
    );
}