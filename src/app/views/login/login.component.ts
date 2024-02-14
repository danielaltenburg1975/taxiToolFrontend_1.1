import { Component } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { VisibleService } from 'src/app/services/visible.service';
import { AuthService } from 'src/app/services/auth.service';


interface LoginResponse {
  role: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string ='';
  password:string ='';
  userRole: string = '';

  constructor(private connectService:ConnectService, private visibleService: VisibleService, private authService: AuthService) {}

  login(): void {

    const username = this.username;
    const password = this.password;

    this.connectService.setCredentials(this.username, this.password);

    // Rufe die Anmeldemethode auf
    this.connectService.getConnect('getLogin')
      .subscribe(
        (response) => {


            this.authService.setCurrentRole(response.role);

            if (response.role.toUpperCase() === "ROLE_ADMIN" || response.role.toUpperCase() === "ROLE_DRIVER") {
              this.authService.setCurrentEmployeeID(response.name);

            }else{
              this.authService.setCurrentCustomer(response.name);
            }

          this.visibleService.setLoginVisible(false);
          this.visibleService.setMenuVisible(true);
          this.visibleService.setNewTripVisible(true)
          this.username = '';
          this.password = '';

        },
        (error) => {
          console.error('Fehler beim Posten: ', error);
          alert('Deine Angaben scheinen nicht zu stimmen!');
          this.username = '';
          this.password = '';
        }
      );
  }
  toggleLoginVisibility(): boolean {
    return this.visibleService.getloginVisible();
  }

}



