import { routes } from './index';
import Homepage from '../pages/index';
import BudweiserPage from '../pages/budweiser';
import FlyingFishPage from '../pages/flyingFish';
import TermsAndConditions from '../pages/TermsAndConditions';

export const Pages = [
    { 'component': <Homepage />, 'link': routes.Homepage, 'exact': true },
    { 'component': <TermsAndConditions />, 'link': routes.TermsAndConditions },
    { 'component': <BudweiserPage />, 'link': routes.BudweiserPage},
    { 'component': <FlyingFishPage />, 'link': routes.FlyingFishPage}
]
