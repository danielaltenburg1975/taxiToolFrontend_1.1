import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 currentRole: string = '';
 currentCustomer: string= '';
 currentEmployeeID: string= '';



  getCurrentRole(): string {
    return this.currentRole;
  }
  setCurrentRole(value: string) {
    this.currentRole = value;
  }

  getCurrentCustomer(): string {
      return this.currentCustomer;
    }
  setCurrentCustomer(value: string) {
      this.currentCustomer = value;
    }

  getCurrentEmployeeID(): string {
        return this.currentEmployeeID;
      }
  setCurrentEmployeeID(value: string) {
      this.currentEmployeeID = value;
    }

}
