import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

imageUrl : string = "/assets/defaultimageholder/defaultimageholder.PNG";
fileToUpload : File = null;
selectedFiles: FileList;
currentFileUpload: File;
progress: { percentage: number } = { percentage: 0 };
temp: string;

constructor(private uploadService: UploadFileService) { }

ngOnInit() {
}



handleFileInput( file : FileList){

this.fileToUpload = file.item(0);

//Show image preview
var reader = new FileReader();

reader.onload = ( event: any) =>{
this.imageUrl = event.target.result;
this.temp=reader.result.split(";base64,")[1];
console.log("ImageData: ", this.temp);

//console.log(this.imageUrl);
}

reader.readAsDataURL(this.fileToUpload);

}

OnSubmit(Image){

  
}

}
