import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isMenuOpen: boolean = false;
  

  constructor(private visibleService: VisibleService) {}
 

  toggleMenu() {

    console.log('isMenuOpen:', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    
  }
  toggleMenuVisibility(): boolean {
    return this.visibleService.getMenuVisible();
  }

  newTripClick(){
    this.visibleService.setAllMenupointsInvisible();
    this.visibleService.setNewTripVisible(true);
  }

  tripSearchClick(){
    this.visibleService.setAllMenupointsInvisible();
    this.visibleService.setTripSearchVisible(true);

  }

  timeStampClick(){
    this.visibleService.setAllMenupointsInvisible();
    this.visibleService.setTimeStampVisible(true);
  }

  logOutClick(){
    this.visibleService.setLoginVisible(true);  
    this.visibleService.setMenuVisible(false)
    this.visibleService.setAllMenupointsInvisible();
    this.isMenuOpen=false;
    }

}
