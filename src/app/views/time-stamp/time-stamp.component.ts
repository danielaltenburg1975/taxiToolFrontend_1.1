import { Component, OnDestroy, Renderer2, ElementRef  } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent {

  private stopwatchRunning: boolean = false;
  private startRun: boolean = false;
  private startTime: number | undefined;
  private timerSubscription: Subscription | undefined;
  private lastElapsedTime: number = 0;

  constructor(private visibleService: VisibleService,
              private renderer: Renderer2,
              private el: ElementRef) {}

  toggleTimeStampVisibility(): boolean {
    return this.visibleService.getTimeStampVisible();
  }

 getElapsedTime(): string {
 let elapsedMilliseconds: number;

   if (this.stopwatchRunning) {
     elapsedMilliseconds = Date.now() - (this.startTime || Date.now());
   } else {
    if(this.startRun==true)
      elapsedMilliseconds = this.lastElapsedTime;
      else
      elapsedMilliseconds = 0;
   }


   // Berechnung der Stunden, Minuten und Sekunden
   const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
   const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);

   // Formatierung in HH:mm:ss
   const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
this.lastElapsedTime = elapsedMilliseconds;

   return formattedTime;
 }

 padZero(num: number): string {
   return num < 10 ? `0${num}` : `${num}`;
 }


  startStopwatch() {
    if (!this.stopwatchRunning) {
      // Starten der Stoppuhr
      this.stopwatchRunning = true;

      this.startTime = Date.now();
      this.startRun = true;

      this.startTime = Date.now();
      // Verwenden von RxJS interval, um alle 1000 Millisekunden (1 Sekunde) zu aktualisieren
      this.timerSubscription = interval(1000).subscribe(() => {
        // Du kannst die verstrichene Zeit auch hier direkt aktualisieren,
        // aber ich lasse es in der getElapsedTime()-Methode, um die Logik sauber zu halten
      });
    } else {
      // Stoppen der Stoppuhr
      this.stopwatchRunning = false;
      this.startTime = undefined;
      // Unsubscribe von der interval-Subscription, um Speicherleck zu vermeiden
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    }
    const backgroundColor = this.stopwatchRunning ? '#eaeaea' : 'white';
        this.renderer.setStyle(this.el.nativeElement.querySelector('.button-container'), 'background-color', backgroundColor);
  }

  ngOnDestroy() {
    // Beim Zerstören der Komponente sicherstellen, dass alle Subscriptions beendet werden
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  getButtonBackgroundColor(): string {
      return this.stopwatchRunning ? 'green' : 'red';
    }
}
