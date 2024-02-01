import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importiere HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainviews/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './mainviews/menu/menu.component';
import { NewTripComponent } from './views/new-trip/new-trip.component';
import { TimeStampComponent } from './views/time-stamp/time-stamp.component';
import { TripSearchComponent } from './views/trip-search/trip-search.component';
import { TripCalculateComponent } from './views/trip-calculate/trip-calculate.component';
import { AdminSettingComponent } from './views/admin-setting/admin-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    LoginComponent,
    MenuComponent,
    NewTripComponent,
    TimeStampComponent,
    TripSearchComponent,
    TripCalculateComponent,
  
    AdminSettingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,  
    HttpClientModule, // Füge HttpClientModule hier hinzu
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
