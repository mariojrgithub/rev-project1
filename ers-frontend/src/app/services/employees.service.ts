import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee'; 
import { AuthService } from './auth.service';

const baseUrl = 'http://localhost:4444/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/manager/all-employees`);
  }

  loginEmployee(employee: Employee): Observable<Employee> {

    return this.http.post(`${baseUrl}/login`, employee);
  }

  validateEmployee(newEmployee: Employee): void {
    this.authService.storeEmployee(newEmployee);

    this.authService.loggedIn = true;
  }

}
