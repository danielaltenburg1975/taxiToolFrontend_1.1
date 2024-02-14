import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent {
showDropdown: boolean = false;
userInput: string ='';
selectedValue: string ='';
filteredOptions: { label: string }[] = [];
  dropdownCustomer = [
    { label: 'Daniel Altenburg' },
    { label: 'Max Mustermann' },
    { label: 'Heinz Beispiel' },
  ];


  constructor(private visibleService: VisibleService) {}

  filterOptions() {
      this.filteredOptions = this.dropdownCustomer.filter(option =>
        option.label.toLowerCase().includes(this.selectedValue.toLowerCase())
      );
      this.showDropdown = true;
    }

  toggleNewTripVisibility(): boolean {
    return this.visibleService.getNewTripVisible();
  }
  toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }

    selectOption(option: { label: string }) {
        this.selectedValue = option.label;
        this.showDropdown = false;
      }

}
