import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent {

  constructor(private visibleService: VisibleService) {}

  toggleNewTripVisibility(): boolean {
    return this.visibleService.getNewTripVisible();
  }

}
