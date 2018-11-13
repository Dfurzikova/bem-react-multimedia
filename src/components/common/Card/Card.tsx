import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnCard = cn('Card');
const cnIcon = cn('Icon');
const cnSubtitle = cn('Subtitle')

import './Card.css';

export class Card extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {
                    registries => {
                        const registry = registries[cnCard()];
                        const Card = registry.get('Card');

                            return (
                                <article className={cnCard({ size: 'm' })}>
                                    <div className={cnCard('Header')}>
                                        <div className={cnIcon({ type: 'close' })}></div>
                                        <div className={cnCard('Event')}>
                                            <img className={cnCard('Icon', ['Image'])} />
                                            <h1 className={cnCard('Title')}></h1>
                                        </div>
                                        <div className={cnCard('Subtitle', ['Subtitle'])} >
                                            <div className={cnSubtitle('Source')}></div>
                                            <div className={cnSubtitle('Date')}></div>

                                        </div>

                                    </div>
                                    <div className={cnCard('Content')}>
                                        <div className={cnCard('Description')}>
                                        </div>
                                    </div>
                                </article>)
                    }
                }
            </RegistryConsumer>
        )
    }
}
