import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() currentMonth: Date = new Date();
  @Output() dateSelected = new EventEmitter<Date>();

  get daysInMonth(): { date?: Date, isCurrentMonth: boolean, isFirstDay: boolean }[] {
    const days = [];
    const firstDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const currentMonthStart = firstDayOfMonth.getDay();
    const totalDaysInMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0).getDate();

    // Leere Tage vor dem ersten Tag des Monats hinzufügen
    for (let i = 2; i <= currentMonthStart; i++) {
      days.push({ isCurrentMonth: false, isFirstDay: false });
    }

    // Tage des Monats hinzufügen
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const currentDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), i);
      const isCurrentMonth = true;
      const isFirstDay = i === 1;

      days.push({ date: currentDate, isCurrentMonth, isFirstDay });
    }

    return days;
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
  }

  selectDate(day: { date?: Date, isCurrentMonth: boolean, isFirstDay: boolean }) {
    if (day.date) {
      this.dateSelected.emit(day.date);
    }
  }

}
