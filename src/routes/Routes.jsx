import { routes } from './index';
import Homepage from '../pages/index';
import Home from '../pages/home';
import TermsAndConditions from '../pages/TermsAndConditions';

export const Pages = [
    { 'component': <Homepage />, 'link': routes.Homepage, 'exact': true },
    { 'component': <TermsAndConditions />, 'link': routes.TermsAndConditions },
    { 'component': <Home />, 'link': '/home'}
]
