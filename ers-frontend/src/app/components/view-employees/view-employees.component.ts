import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service'; 
import { Employee } from 'src/app/models/Employee'; 

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees?: Employee[];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe({
          next: (employees) => {
          this.employees = employees;
          console.log(employees);
        },
        error: (e) => console.log(e)
      })     
  }

}
