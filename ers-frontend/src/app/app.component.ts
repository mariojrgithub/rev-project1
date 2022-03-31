import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ers-frontend';

  role = sessionStorage.getItem("role");
  
  constructor(private authService: AuthService){}

  isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  getRole(){
    return this.authService.employeeRole;
  }

}
