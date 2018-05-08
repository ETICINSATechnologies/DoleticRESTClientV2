import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {AppRoutingModule} from "./app-routing.module";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent } from './app.component';
import {LoginPageComponent} from './pages/login.page.component';
import {DashboardComponent} from "./components/Dashboard/dashboard.component";
import {ContactsComponent} from "./components/Dashboard/contacts.component";
import {StudiesComponent} from "./components/Dashboard/studies.component";
import {SupportComponent} from "./components/Support/support.component";
import {MyTicketsComponent} from "./components/Support/my-tickets.component";
import {TicketsToSolveComponent} from "./components/Support/tickets-to-solve.component";
import {TicketFormComponent} from "./components/Support/ticket-form.component";
import {RHComponent} from './components/RH/rh.component';
import {ChartComponent} from './components/RH/chart.component';
import {AlertComponent} from './components/alert.component';
import {GRCComponent} from "./components/GRC/grc.component";
import {CompanyTableComponent} from './components/GRC/company-table.component';
import {MarketResearchToDoTableComponent} from './components/GRC/market-research-to-do-table.component';
import {MarketResearchResultTableComponent} from './components/GRC/market-research-result-table.component';
import {CurrentContactsTableComponent} from './components/GRC/current-contacts-table.component';
import {OldContactsTableComponent} from './components/GRC/old-contacts-table.component';
import {EditContactComponent} from './components/GRC/edit-contact.component';
import {EditFirmComponent} from "./components/GRC/edit-firm.component";
import {MembersTableComponent} from './components/RH/members-table.component';
import {OldMembersTableComponent} from './components/RH/old-members-table.component';

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
import {TicketTypeService} from "./services/ticket-type.service";
import {TicketStatusService} from "./services/ticket-status.service";
import {UserService} from "./services/user.service";
import {AuthGuard} from './auth.gard';
import {RecruitmentEventService} from './services/recruitment-event.service';
import {AlertService} from './services/alert.service';
import {FirmService} from "./services/firm.service";


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
        TicketFormComponent,
        RHComponent,
        ChartComponent,
        GRCComponent,
        AlertComponent,
        CompanyTableComponent,
        MarketResearchToDoTableComponent,
        MarketResearchResultTableComponent,
        CurrentContactsTableComponent,
        OldContactsTableComponent,
        EditContactComponent,
        EditFirmComponent,
        MembersTableComponent,
        OldMembersTableComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SuiModule,
        AppRoutingModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
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
        TicketTypeService,
        TicketStatusService,
        UserService,
        AuthGuard,
        RecruitmentEventService,
        AlertService,
        FirmService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
