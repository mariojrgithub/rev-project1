import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-requests-manager',
  templateUrl: './view-requests-manager.component.html',
  styleUrls: ['./view-requests-manager.component.css']
})
export class ViewRequestsManagerComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveRequests();
  }

  retrieveRequests(): void {
    this.requestService.getManagerRequests()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

  getRequestToEdit(requestId: any){
    console.log(requestId);
    this.router.navigate([`manager/requests/edit`, requestId]);
  }

  
    
  

  // updateRequest(): void {
  //   this.requestService.updateRequest<Request>(this.)
  // }


}
