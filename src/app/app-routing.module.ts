import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/Dashboard/dashboard.component';
import {LoginPageComponent} from "./pages/login.page.component";
import {SupportComponent} from "./components/Support/support.component";
import {RHComponent} from './components/RH/rh.component';
import {AuthGuard} from './auth.gard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent},
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'support', component: SupportComponent, canActivate: [AuthGuard]},
    { path: 'rh', component: RHComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}