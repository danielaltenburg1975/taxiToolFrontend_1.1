import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent {

newTripBoxVisible : boolean = true;
startTimeBoxVisible : boolean = false;
selectedStartLocation : string ="";
selectedEndLocation : string = "";

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

toggleSearchStartTimeBoxVisible(){
  this.startTimeBoxVisible = true;
  this.newTripBoxVisible = false;
}

  selectCustomer(option: { label: string }) {
    // Logic for customer selection
    console.log('Selected Customer:', option.label);
  }

  //set the selected entry for start location
  setSelectStartLocation(option: { label: string }) {
   this.selectedStartLocation = option.label;
  }

  //set the selected entry for end location
  setSelectEndLocation(option: { label: string }) {
     this.selectedEndLocation = option.label;
    }

  cancelNewTripClick(){
  }
  cancelStartTimeClick(){
      this.startTimeBoxVisible = false;
      this.newTripBoxVisible = true;
    }
  checkAndBookNewTripClick(){
  }
  checkAndSetStartTime(){
    this.startTimeBoxVisible = false;
    this.newTripBoxVisible = true;
    }


}
