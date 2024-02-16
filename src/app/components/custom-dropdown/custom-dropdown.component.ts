import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
@Input() options: { label: string }[] = [];
  @Input() placeholder: string = '';
  @Output() optionSelected = new EventEmitter<{ label: string }>();

  showDropdown: boolean = false;
  userInput: string = '';
  filteredOptions: { label: string }[] = [];

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.label.toLowerCase().includes(this.userInput.toLowerCase())
    );
    this.showDropdown = true;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: { label: string }) {
    this.userInput = option.label;
    this.optionSelected.emit(option);
    this.showDropdown = false;
  }

}
