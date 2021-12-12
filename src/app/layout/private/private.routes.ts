import {Routes} from '@angular/router';

export const PRIVATE_ROUTES :Routes = [
    { path: 'dashboard', loadChildren: () => import('../../home-after-login/home-after-login.module').then(m => m.HomeAfterLoginModule) }
]