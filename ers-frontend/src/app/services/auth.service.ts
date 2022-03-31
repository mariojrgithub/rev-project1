import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  employeeRole? = "";

  constructor() { }

  storeEmployee(employee: Employee): void {
    sessionStorage.setItem("role", JSON.stringify(employee.employeeRole));
    sessionStorage.setItem("id", JSON.stringify(employee.employeeId));
    this.employeeRole = employee.employeeRole;
    
  }

  retrieveEmployee(): Employee {
    let data: any = sessionStorage.getItem("userInfo");
    return data;

  }

  destroyEmployee(): void {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("id");
  }
}
