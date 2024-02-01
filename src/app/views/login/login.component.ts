import { Component } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { VisibleService } from 'src/app/services/visible.service';


interface LoginResponse {
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string ='';
  password:string ='';

  
  
 

  constructor(private connectService:ConnectService, private visibleService: VisibleService) {
    
    
  } 
  
  login(): void {
    
    const username = this.username;
    const password = this.password;
    // Setze die Anmeldedaten einmalig
    console.log(this.username);
    console.log(this.password);
    
    this.connectService.setCredentials(this.username, this.password);

    // Rufe die Anmeldemethode auf
    this.connectService.getConnect('getLogin')
      .subscribe(
        (response) => {
          console.log('Erfolgreich gepostet: ', response);          
          
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



