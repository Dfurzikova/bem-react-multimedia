import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Content as ContentCommon } from '../../common/Content/Content';
import { EventsContainer } from '../EventsContainer/EventsContainer' ; ///путь текущему компоненту 

import './Content.css';

const cnContent = cn('Content');

class ContentClass extends React.Component {
    render() {
        return (
            <div className={cnContent()}>
                <h1 className={cnContent('Title')}>Лента событий</h1>
                <EventsContainer />
            </div>
        )
    }
}

const ContentRegistry = new Registry({ id: cn('Content')() });
ContentRegistry.set('Content', ContentClass);
ContentRegistry.set('EventsContainer', EventsContainer);

export const Content = withRegistry(ContentRegistry)(ContentCommon);
