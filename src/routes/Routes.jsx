import { routes } from './index';
import Homepage from '../pages/index';
import TermsAndConditions from '../pages/TermsAndConditions';

export const Pages = [
    { 'component': <Homepage />, 'link': routes.Homepage, 'exact': true },
    { 'component': <TermsAndConditions />, 'link': routes.TermsAndConditions }
]
