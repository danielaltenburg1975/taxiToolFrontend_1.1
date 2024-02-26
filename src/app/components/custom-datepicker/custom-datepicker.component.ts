import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss']
})
export class CustomDatepickerComponent {


 currentDate: Date = new Date();
   currentDay: number = 1;
   currentMonth: number = 1;
   currentYear: number = 1;

   constructor() {
     this.updateCurrentDate();
   }

   updateCurrentDate() {
     this.currentDay = this.currentDate.getDate();
     this.currentMonth = this.currentDate.getMonth() + 1;
    this.currentYear = +this.currentDate.getFullYear().toString().slice(-2);

   }

   dayMinusClick() {
     this.currentDate.setDate(this.currentDate.getDate() - 1);
     this.updateCurrentDate();
   }

   dayPlusClick() {
     this.currentDate.setDate(this.currentDate.getDate() + 1);
     this.updateCurrentDate();
   }

   monthMinusClick() {
     this.currentDate.setMonth(this.currentDate.getMonth() - 1);
     this.updateCurrentDate();
   }

   monthPlusClick() {
     this.currentDate.setMonth(this.currentDate.getMonth() + 1);
     this.updateCurrentDate();
   }

   yearMinusClick() {
     this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
     this.updateCurrentDate();
   }

   yearPlusClick() {
     this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
     this.updateCurrentDate();
   }


}
