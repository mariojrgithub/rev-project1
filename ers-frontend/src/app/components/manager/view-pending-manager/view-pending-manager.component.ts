import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-pending-manager',
  templateUrl: './view-pending-manager.component.html',
  styleUrls: ['./view-pending-manager.component.css']
})
export class ViewPendingManagerComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrievePending();
  }

  retrievePending(): void {
    this.requestService.getManagerPending()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
