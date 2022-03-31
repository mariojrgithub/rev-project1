import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // destroy the user info stored in sessionStorage
    this.authService.destroyEmployee();
    // mark that the person has logged out
    this.authService.loggedIn = false;
    // navigate to LoginComponent
    this.router.navigate(['login']);
  }

}
