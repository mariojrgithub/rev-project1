import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-all-pics',
  templateUrl: './all-pics.component.html',
  styleUrls: ['./all-pics.component.css']
})
export class AllPicsComponent implements OnInit {

  retrievedImagesData?: any[];
  retrievedImages?: any[];
  retrievedIds?: any[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {

   this.retrieveAllImages();

  }

  retrieveAllImages(): void {
    this.requestService.getAllPics()
      .subscribe({
        next: (images) => {
          this.retrievedImagesData = images;
          
          this.retrievedImages = this.retrievedImagesData?.map((i) => "data:image/jpeg;base64," + i.imageByte);
          this.retrievedIds = this.retrievedImagesData?.map((i) => i.imageId);
          console.log(this.retrievedIds)
          
        },
        error: (e) => console.log(e)
      })
  }

}
