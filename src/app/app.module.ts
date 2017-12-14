import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PropDashboardComponent} from './propDashboard/propDashboard.component';
import {PropertyDetailsComponent} from './property-details/property-details.component';
import { AppComponent } from './app.component';
import {AddPropertyComponent} from './add-property/add-property.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {PropertyService} from './property.service';

@NgModule({
  declarations: [
    AppComponent,
    PropDashboardComponent,
    PropertyDetailsComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
