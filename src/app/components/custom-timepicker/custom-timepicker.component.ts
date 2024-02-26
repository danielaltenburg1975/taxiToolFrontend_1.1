import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-timepicker',
  templateUrl: './custom-timepicker.component.html',
  styleUrls: ['./custom-timepicker.component.scss']
})
export class CustomTimepickerComponent {

  hour:number=12;
  minute:number = 30

  hourMinusClick(){
   if (this.hour > 0) {
      this.hour--;
    } else {
      this.hour = 23;
    }
  }
  hourPlusClick(){
  if (this.hour < 23){
      this.hour++;
     }else{
     this.hour = 0;
     }
  }
  minuteMinusClick(){
  if ( this.minute > 0){
      this.minute -= 5;
      }else{
      this.minute = 55;
      }
  }
  minutePlusClick(){
  if ( this.minute  <55){
        this.minute += 5;
        }else{
        this.minute = 0;
        }
  }
  startTimeSearch(){
  }

}
