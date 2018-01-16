import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/Dashboard/dashboard.component';
import {LoginPageComponent} from "./pages/login.page.component";
import {SupportComponent} from "./components/Support/support.component";
import {RHComponent} from './components/RH/rh.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'support', component: SupportComponent},
    { path: 'rh', component: RHComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}