import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/models/Request';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-edit-request-manager',
  templateUrl: './edit-request-manager.component.html',
  styleUrls: ['./edit-request-manager.component.css']
})
export class EditRequestManagerComponent implements OnInit {

  newRequest: Request = {
    expenseId: 0,
    expenseAmount: 0,
    employeeId: 0,
    requestDate: "",
    expenseStatus: "",
    adjudicatedDate: "",
    approveDeny: ""
  }

  selections = ["approve", "deny"];

  submitted = false;

  constructor(private requestService: RequestsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let requestId: any = this.activatedRoute.snapshot.paramMap.get("expenseId");
    console.log(requestId);

    this.requestService.getRequestById(requestId)
          .subscribe({
            next: request => {
              this.newRequest = request;
              console.log(request);
            }
          })
  }

  editRequest(): void {

    this.requestService.updateRequest(this.newRequest)
      .subscribe({
        next: (request) => {
          console.log(request);
          this.submitted = true;

          if(this.submitted){
            this.router.navigate(['/manager/requests']);
          }

          this.newRequest = {
            expenseId: 0,
            expenseAmount: 0,
            employeeId: 0,
            requestDate: "",
            expenseStatus: "",
            adjudicatedDate: "",
            approveDeny: ""
          }

        }, 
        error: (e) => console.log(e)

      })
  
  }
  

}
