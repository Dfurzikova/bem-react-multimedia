
import { Registry, withRegistry } from '@bem-react/di';

import { Page as PageCommon } from '../../common/Page/Page'; // Импорт common компонента
import { Header } from '../Header/Header'; //импорт компонента Header
// import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import './Page.css';


const PageRegistry = new Registry({ id: 'Page' });
PageRegistry.set('Header', Header);
PageRegistry.set('Footer', Footer);
// PageRegistry.set('Content', Content)


export const Page = withRegistry(PageRegistry)(PageCommon);

