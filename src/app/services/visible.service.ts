import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleService {

  constructor() { }
  isLoginVisible: boolean = true;
  isMenuVisible: boolean = false;
  isNewTripVisible: boolean = false;
  isTripSearchVisible:boolean = false;
  isTimeStampVisible: boolean = false;
  isTripCalculateVisible: boolean = false;
  isAdminSettingVisible: boolean = false;

  setAllMenupointsInvisible(){
    this.isNewTripVisible = false;
    this.isTripSearchVisible = false;
    this.isTimeStampVisible = false;
    this.isTripCalculateVisible = false;
    this.isAdminSettingVisible = false;

  }


  setLoginVisible(visible:boolean){
    this.isLoginVisible = visible;
  }
  getloginVisible(){
    return this.isLoginVisible;
  }


  setMenuVisible(visible:boolean){
    this.isMenuVisible = visible;
  }
  getMenuVisible(){
    return this.isMenuVisible;
  }

  setNewTripVisible(visible:boolean){
    this.isNewTripVisible = visible;
  }
  getNewTripVisible(){
    return this.isNewTripVisible;
  }

  setTripSearchVisible(visible:boolean){
    this.isTripSearchVisible = visible;
  }
  getTripSearchVisible(){
    return this.isTripSearchVisible;
  }

  setTimeStampVisible(visible:boolean){
    this.isTimeStampVisible = visible;
  }
  getTimeStampVisible(){
    return this.isTimeStampVisible;
  }

  setTripCalculateVisible(visible:boolean){
    this.isTripCalculateVisible = visible;
  }
  getTripCalculateVisible(){
    return this.isTripCalculateVisible;
  }

  setAdminSettingsVisible(visible:boolean){
    this.isAdminSettingVisible = visible;
  }
  getAdminSettingsVisible(){
    return this.isAdminSettingVisible;
  }


}
