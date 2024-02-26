import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent {

newTripFormVisible : boolean = true;

dropdownCustomer = [
    { label: 'Daniel Altenburg' },
    { label: 'Max Mustermann' },
    { label: 'Heinz Beispiel' },
  ];

  dropdownStartLocations = [
    { label: 'ITZ Freiburg' },
          { label: 'Strahlenklinik Uni' },
          { label: 'Strahlenklinik Diakoni' },
          { label: 'Strahlenklinik Singen' },
          { label: 'Frauenklinik Uni' },
          { label: 'Praxis Hoffmeister' },
  ];
  dropdownEndLocations = [
      { label: 'ITZ Freiburg' },
      { label: 'Strahlenklinik Uni' },
      { label: 'Strahlenklinik Diakoni' },
      { label: 'Strahlenklinik Singen' },
      { label: 'Frauenklinik Uni' },
      { label: 'Praxis Hoffmeister' },
    ];

  constructor(private visibleService: VisibleService) {}

  toggleNewTripVisibility(): boolean {
    return this.visibleService.getNewTripVisible();
  }



  selectCustomer(option: { label: string }) {
    // Logic for customer selection
    console.log('Selected Customer:', option.label);
  }

  selectStartLocation(option: { label: string }) {
    // Logic for location selection
    console.log('Selected Start Location:', option.label);
  }
  selectEndLocation(option: { label: string }) {
      // Logic for location selection
      console.log('Selected End Location:', option.label);
    }

  cancelNewTripClick(){
  }
  cancelStartTimeClick(){
    }
  checkAndBookNewTripClick(){
  }
  checkAndBookStartTimeClick(){
    }


}
