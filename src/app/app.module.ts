import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainviews/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './mainviews/menu/menu.component';
import { NewTripComponent } from './views/new-trip/new-trip.component';
import { TimeStampComponent } from './views/time-stamp/time-stamp.component';
import { TripSearchComponent } from './views/trip-search/trip-search.component';
import { TripCalculateComponent } from './views/trip-calculate/trip-calculate.component';
import { AdminSettingComponent} from './views/admin-setting/admin-setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';





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
    CustomDropdownComponent,


  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
