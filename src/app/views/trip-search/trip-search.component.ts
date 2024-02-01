import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.scss']
})
export class TripSearchComponent {

  constructor(private visibleService: VisibleService) {}

  toggleTripSearchVisibility(): boolean {
    return this.visibleService.getTripSearchVisible();
  }

}
