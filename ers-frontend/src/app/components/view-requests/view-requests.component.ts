import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';


@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveRequests();
  }

  retrieveRequests(): void {
    this.requestService.getRequests()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
