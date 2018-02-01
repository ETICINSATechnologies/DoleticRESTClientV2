import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {AppRoutingModule} from "./app-routing.module";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {LoginPageComponent} from './pages/login.page.component';
import {DashboardComponent} from "./components/Dashboard/dashboard.component";
import {ContactsComponent} from "./components/Dashboard/contacts.component";
import {StudiesComponent} from "./components/Dashboard/studies.component";
import {SupportComponent} from "./components/Support/support.component";
import {MyTicketsComponent} from "./components/Support/my-tickets.component";
import {TicketsToSolveComponent} from "./components/Support/tickets-to-solve.component";
import {RHComponent} from './components/RH/rh.component';
import {ChartComponent} from './components/RH/chart.component';

import {AuthenticationService} from "./services/auth.service";
import {DivisionService} from "./services/division.service";
import {LoginService} from "./services/login.service";
import {GenderService} from "./services/gender.service";
import {CountryService} from "./services/country.service";
import {PositionService} from "./services/position.service";
import {DepartmentService} from "./services/department.service";
import {ContactService} from "./services/contact.service";
import {ProjectService} from "./services/project.service";
import {SupportService} from "./services/support.service";
import {TicketService} from "./services/ticket.service";
import {AuthGuard} from './auth.gard';
import {RecruitmentEventService} from './services/recruitment-event.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        DashboardComponent,
        ContactsComponent,
        StudiesComponent,
        SupportComponent,
        MyTicketsComponent,
        TicketsToSolveComponent,
        RHComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SuiModule,
        AppRoutingModule,
        NgxChartsModule,
        BrowserAnimationsModule
    ],
    providers: [
        AuthenticationService,
        DivisionService,
        LoginService,
        GenderService,
        CountryService,
        PositionService,
        DepartmentService,
        ContactService,
        ProjectService,
        SupportService,
        TicketService,
        AuthGuard,
        RecruitmentEventService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
