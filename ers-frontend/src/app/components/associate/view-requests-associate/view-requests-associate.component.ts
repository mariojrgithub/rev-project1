import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-requests-associate',
  templateUrl: './view-requests-associate.component.html',
  styleUrls: ['./view-requests-associate.component.css']
})
export class ViewRequestsAssociateComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveRequests();
  }

  retrieveRequests(): void {

    let id = sessionStorage.getItem("id");

    this.requestService.getAssociateRequests(Number(id))
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
