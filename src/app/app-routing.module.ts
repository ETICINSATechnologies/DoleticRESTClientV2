import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/Dashboard/dashboard.component';
import {LoginPageComponent} from "./pages/login.page.component";
import {SupportComponent} from "./components/Support/support.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'support', component: SupportComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}