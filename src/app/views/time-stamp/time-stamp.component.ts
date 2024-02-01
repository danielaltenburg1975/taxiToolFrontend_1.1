import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent {
  
  constructor(private visibleService: VisibleService) {}

  toggleTimeStampVisibility(): boolean {
    return this.visibleService.getTimeStampVisible();
  }

}
