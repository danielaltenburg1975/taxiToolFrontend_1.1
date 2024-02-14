import { Component, Renderer2, ElementRef } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isMenuOpen: boolean = false;
  isSettingButtonClicked = false;

  constructor(private visibleService: VisibleService, private authService: AuthService,
              private renderer: Renderer2, private el: ElementRef) {}


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  toggleAdminSetting(): boolean {
  const tempValue: boolean = this.authService.getCurrentRole() === "ROLE_ADMIN";
  return tempValue}

  toggleTimeStamp(): boolean {
  const tempValue: boolean = this.authService.getCurrentRole() === "ROLE_DRIVER"||
                             this.authService.getCurrentRole() === "ROLE_ADMIN";
  return tempValue}


  toggleMenuVisibility(): boolean {
    return this.visibleService.getMenuVisible();
  }

  adminSettingClick(){
   this.visibleService.setAllMenupointsInvisible();
   this.visibleService.setAdminSettingsVisible(true);

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

  isAdminSettingsVisible(): boolean {
      return this.visibleService.getAdminSettingsVisible();
    }

  isTimeStampVisible(): boolean {
      return this.visibleService.getTimeStampVisible();
    }

  isTripSearchVisible(): boolean {
        return this.visibleService.getTripSearchVisible();
      }

  isNewTripVisible(): boolean {
        return this.visibleService.getNewTripVisible();
      }

}
