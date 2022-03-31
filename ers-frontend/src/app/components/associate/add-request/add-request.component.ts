import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  newRequest: Request = {
    employeeId: 0,
    expenseAmount: 0
  }
  submitted = false;

  constructor(private requestService: RequestsService, private router: Router) { }

  ngOnInit(): void {
  }

  addRequest(): void {

    if(this.newRequest.employeeId == 0|| this.newRequest.expenseAmount == 0){
      alert("Please enter the proper information")
    } else {

    this.requestService.addRequest(this.newRequest)
        .subscribe({
          next: (request) => {
          console.log(request);
          this.submitted = true;

          if(this.submitted){
            this.router.navigate(['/associate/requests'])
          }

          this.newRequest = {
            employeeId: 0,
            expenseAmount: 0
          }
        },
        error: (e) => console.log(e)
      })   
    }
  }

}
