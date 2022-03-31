import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-resolved-associate',
  templateUrl: './view-resolved-associate.component.html',
  styleUrls: ['./view-resolved-associate.component.css']
})
export class ViewResolvedAssociateComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveResolved();
  }

  retrieveResolved(): void {

    let id = sessionStorage.getItem("id");

    this.requestService.getAssociateResolved(Number(id))
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
