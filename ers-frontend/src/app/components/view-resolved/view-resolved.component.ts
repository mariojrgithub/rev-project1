import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-resolved',
  templateUrl: './view-resolved.component.html',
  styleUrls: ['./view-resolved.component.css']
})
export class ViewResolvedComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveResolved();
  }

  retrieveResolved(): void {
    this.requestService.getResolved()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
