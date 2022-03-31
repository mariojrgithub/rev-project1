import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee?: Employee;

  newEmployee: Employee = {
    employeeEmail: "",
    employeePassword: "",
    employeeRole: ""
  }

  submitted = false;

  selections = ["associate", "manager"];

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }
  retrieveEmployee(): void {
    this.employeeService.loginEmployee(this.newEmployee)
        .subscribe({
          next: (employee) => {

          if(employee == null) {
            alert("Please Enter the Correct Login Info!")
          } else {

              this.employee = employee;
              console.log(employee);
              this.submitted = true;

              this.employeeService.validateEmployee(employee);

              if(this.submitted && employee.employeeRole == 'manager'){
                this.router.navigate(['/manager/requests']);
              } else if(this.submitted && employee.employeeRole == 'associate'){
                this.router.navigate(['/associate/requests']);
              }
        
              this.newEmployee = {
                employeeEmail: "",
                employeePassword: "",
                employeeRole: ""
              }
        }

        },
        error: (e) => console.log(e)
      }) 
  
  }

  // validateEmployee() {
  //   this.employeeService.validateEmployee(this.newEmployee);
  // }

}
