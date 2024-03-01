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

  inputFocused: boolean = false;
  showDropdown: boolean = false;
  userInput: string = '';
  selectedUserInput: string = '';
  filteredOptions: { label: string }[] = [];

 /**
    * Filters the available options based on user input and updates the dropdown list.
    */
   filterOptions() {
     this.filteredOptions = this.options.filter(option =>
       option.label.toLowerCase().includes(this.userInput.toLowerCase())
     );
     this.showDropdown = true;
   }

   /**
    * Clears the user input and toggles the visibility of the dropdown list.
    */
   handleIconClick() {
     this.userInput = '';
     this.toggleDropdown();
   }

   /**
    * Toggles the visibility of the dropdown list and updates filtered options if visible.
    */
   toggleDropdown() {
     this.showDropdown = !this.showDropdown;

     if (this.showDropdown) {
       this.filterOptions();
     }
   }

   /**
    * Handles the selection of an option, updates the user input, and emits the selected option.
    * @param option - The selected option.
    */
   selectOption(option: { label: string }) {
     this.userInput = option.label;
     this.optionSelected.emit({ label: this.userInput });
     this.showDropdown = false;
   }

   /**
    * Handles the blur event of the input field, updates the focused flag, and emits the selected user input.
    */
   inputBlur() {
     this.inputFocused = false;

     if (this.userInput) {
       this.selectedUserInput = this.userInput;
       this.optionSelected.emit({ label: this.userInput });
     }
   }

   /**
    * Handles the input event of the input field, updates the filtered options based on user input.
    */
   inputChanged() {
     if (!this.userInput) {
       this.filteredOptions = this.options;
     } else {
       this.filteredOptions = this.options.filter(option =>
         option.label.toLowerCase().includes(this.userInput.toLowerCase())
       );
     }

     this.showDropdown = true;
   }

}
