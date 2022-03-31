import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-resolved-manager',
  templateUrl: './view-resolved-manager.component.html',
  styleUrls: ['./view-resolved-manager.component.css']
})
export class ViewResolvedManagerComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveResolved();
  }

  retrieveResolved(): void {
    this.requestService.getManagerResolved()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
