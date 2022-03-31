import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  selectedFile?: any;
  currentFile?: any;
  fileInfos?: any;

  submitted = false;

  constructor(private requestService: RequestsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    console.log(event)
    this.selectedFile = event.target.files[0];
    
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      console.log(reader.result)
    }
  }  

  upload(): void {
    let uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name );

    this.requestService.uploadImage(uploadImageData)
      .subscribe({
        next: (event) => {
          console.log(event);

          this.submitted = true;

          if(this.submitted){
            this.router.navigate(['/manager/all-pics']);
          }
        },
        error: (e) => console.log(e) 
      });
      
  }  
  
}
