import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent,Public_ROUTES} from './layout/public'; 
import {PrivateComponent}  from './layout/private';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
 {path:'',component:PublicComponent},
 {path: '404', component: NotFoundComponent},
 {path: '**', redirectTo: '/404'},
 {path:'',component:PrivateComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
