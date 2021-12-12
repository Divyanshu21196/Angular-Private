import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAfterLoginComponent } from './home-after-login.component';

const routes: Routes = [{ path: '', component: HomeAfterLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAfterLoginRoutingModule { }
