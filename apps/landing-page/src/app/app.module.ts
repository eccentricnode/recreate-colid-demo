import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@demo/material';
import { CoreDataModule } from '@demo/core-data';
import { NxModule } from '@nrwl/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ServiceComponent } from './dashboard/service/service.component';
import { FeaturesComponent } from './dashboard/features/features.component';
import { PricingComponent } from './dashboard/pricing/pricing.component';
import { TeamComponent } from './dashboard/team/team.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { FaqComponent } from './dashboard/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ServiceComponent,
    FeaturesComponent,
    PricingComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
