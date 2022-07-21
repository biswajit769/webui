import { Component, OnInit } from '@angular/core';
import {LenderserviceService} from '../../services/lenderservice.service';

@Component({
  selector: 'app-pendingdocs',
  templateUrl: './pendingdocs.component.html',
  styleUrls: ['./pendingdocs.component.css']
})
export class PendingdocsComponent implements OnInit {

  constructor(public request:LenderserviceService) { }

  ngOnInit() {
  }
  public dat:File;
  selectedFile: File;
  selectedFile1: File;
  public profi:File = null;
  public profi1:File = null;
  public message1:File=null;
  public message2:File=null;
     UploadDoc(event:any){
       console.log("Fileeeeeeefrom event",event);
       this.selectedFile= event.target.files[0]
       console.log("tttttyyyyyy",this.selectedFile);
   
     }
       UploadDoc1(event:any){
       console.log("Fileeeeeeefrom event",event);
       this.selectedFile1= event.target.files[0]
       console.log("tttttyyyyyy",this.selectedFile1);
   
     }



   lenderdoc1(){
       const uploadData = new FormData();
       uploadData.append('bank_statement', this.selectedFile, this.selectedFile.name);
       this.request.lenderdocument(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty",data);
        this.profi=data.a;
        this.message1=data.b;
        this.selectedFile= null;
        console.log("neeeeeeeeee",this.profi);
     
        
        
      },
      error => console.log("erroorrrr",error)
    );
     }



   lenderdoc2(){
       const uploadData = new FormData();
       uploadData.append('licence_copy', this.selectedFile1, this.selectedFile1.name);
       this.request.lenderdocument2(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty",data);
        this.profi1=data.a;
        this.message2=data.b;
        this.selectedFile1= null;
        console.log("neeeeeeeeee",this.profi1);
        
        
        
      },
      error => console.log("erroorrrr",error)
    );
     }
 
   // lenderbankstatement(){
   //   let certificate = {"val":this.dat['name']};
   //   let obj = {"certify":certificate}
   //   this.request.fileAdressing(obj).subscribe(data =>{
   //     console.log("dataaaaaa",data);
   //   });
   // }

   // licencecopy(){
   //  let certificate = {"val":this.dat['name']};
   //  let obj = {"certify":certificate}
   //  this.request.fileAdressing(obj).subscribe(data =>{
   //    console.log("dataaaaaa",data);
   //  });

   // }

}
