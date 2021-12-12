import {Routes} from '@angular/router';

export const Public_ROUTES :Routes = [
    { path: 'user', loadChildren: () => import('../../core/user/user.module').then(m => m.UserModule) }
]