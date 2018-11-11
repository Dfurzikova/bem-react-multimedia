import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Page as PageCommon } from '../../common/Page/Page';

import './Page.css';

const page = cn('Page');

const PageRegistry = new Registry({ id: cn('Page')() });
PageRegistry.set('Body', Body);

function Body() {
    return (
        <div className={page()}></div>
    );
}
export const Page = withRegistry(PageRegistry)(PageCommon);
