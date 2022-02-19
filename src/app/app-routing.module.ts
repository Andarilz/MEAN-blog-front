import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthComponent} from "./auth/auth.component";
import {RegComponent} from "./reg/reg.component";

const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'reg', component: RegComponent},
      {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
