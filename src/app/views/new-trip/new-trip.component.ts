import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent {

dropdownCustomer = [
    { label: 'Daniel Altenburg' },
    { label: 'Max Mustermann' },
    { label: 'Heinz Beispiel' },
  ];

  dropdownLocations = [
    { label: 'Abholort 1' },
    { label: 'Abholort 2' },
    { label: 'Abholort 3' },
  ];

  constructor(private visibleService: VisibleService) {}

  toggleNewTripVisibility(): boolean {
    return this.visibleService.getNewTripVisible();
  }

  selectCustomer(option: { label: string }) {
    // Logic for customer selection
    console.log('Selected Customer:', option.label);
  }

  selectLocation(option: { label: string }) {
    // Logic for location selection
    console.log('Selected Location:', option.label);
  }
}
