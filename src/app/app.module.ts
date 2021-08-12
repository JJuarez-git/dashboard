import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './modules/material.module';
import { ChartModule } from './modules/chart.module';

import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { NavButtonComponent } from './components/shared/nav-button/nav-button.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ModalComponent } from './components/shared/modal/modal.component';

import { CheckStatusPipe } from './pipes/check-status.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContentComponent,
    NavButtonComponent,
    CustomersComponent,
    DashboardComponent,
    CheckStatusPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
