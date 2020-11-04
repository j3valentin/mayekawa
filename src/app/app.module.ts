import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostCentersModule } from './cost-centers/cost-centers.module';
import { TravelExpensesModule } from './travel-expenses/travel-expenses.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule,
    NgbCollapseModule,
    AppRoutingModule,
    CostCentersModule,
    TravelExpensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
