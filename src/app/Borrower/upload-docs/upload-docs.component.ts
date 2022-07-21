import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router'
declare var $: any;


@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  constructor(public request: BorrowerserviceService,public dialog: MatDialog,public router:Router) { }



  @ViewChild('Businesspan') Businesspan: ElementRef;
  @ViewChild('Businesspan1') Businesspan1: ElementRef;
  @ViewChild('Businesspan2') Businesspan2: ElementRef;
  @ViewChild('Businesspan3') Businesspan3: ElementRef;


   

  ngOnInit() {
 $(document).ready(function() {
    $('#trigger').click(function(){
      $("#dialog").dialog();
    }); 
  }); 
  }
  selectedFile: File;
  selectedFile1: File;
  selectedFile2: File;
  selectedFile3: File;
  public profi: File = null;
  public profi1: File = null;
  public profi2: File = null;
  public profi3: File = null;
  public profi4: File = null;
  public message: File = null;
  public message1: File = null;
  public message2: File = null;
  public message3: File = null;
  //upload documents
  public dat: File;
  buss;
  buss1;
  buss2;
  buss3;
  viewdocs(docs:any) {
    console.log("test",docs);
    let documents = {'Business_pan':docs}
    this.request.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss = backenddata['img'];
      // this.request.BusinessPan = this.buss;
      // console.log("finalllllllllllllll",this.buss);
      


      $(this.Businesspan.nativeElement).modal('show')

    })
  }

  viewdocs1(docs:any) {
    let documents = {'bank_stmnt_borwr':docs}
    this.request.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss1 = backenddata['img1'];
      $(this.Businesspan1.nativeElement).modal('show')

    })
  }
  viewdocs2(docs:any) {
    let documents = {'Balance_sheet':docs}
    this.request.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss2 = backenddata['img2'];
      $(this.Businesspan2.nativeElement).modal('show')

    })
  }
  viewdocs3(docs:any) {
    let documents = {'present_address_proof':docs}
    this.request.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss3 = backenddata['img3'];
      $(this.Businesspan3.nativeElement).modal('show')


    })
  }
  UploadDoc(event:any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile);

  }
  UploadDoc1(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile1 = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile1);

  }
  UploadDoc2(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile2 = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile2);

  }
  UploadDoc3(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile3 = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile3);

  }

  businesspan1() {
    const uploadData = new FormData();
    uploadData.append('Business_pan', this.selectedFile, this.selectedFile.name);
    this.request.businesspan1(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.profi = data.a;
        this.message = data.b;
        this.selectedFile = null;
        console.log("neeeeeeeeee", this.profi);



      },
      error => console.log("erroorrrr", error)
    );
  }


  businesspan2() {
    const uploadData = new FormData();
    uploadData.append('bank_stmnt_borwr', this.selectedFile1, this.selectedFile1.name);
    this.request.businesspan2(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.profi1 = data.a;
        this.message1 = data.b;
        this.selectedFile1 = null;
        console.log("neeeeeeeeee", this.profi1);



      },
      error => console.log("erroorrrr", error)
    );
  }
  businesspan3() {
    const uploadData = new FormData();
    uploadData.append('Balance_sheet', this.selectedFile2, this.selectedFile2.name);
    this.request.businesspan3(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.profi2 = data.a;
        this.message2 = data.b;
        this.selectedFile2 = null;
        console.log("neeeeeeeeee", this.profi2);



      },
      error => console.log("erroorrrr", error)
    );
  }


  businesspan4() {
    const uploadData = new FormData();
    uploadData.append('present_address_proof', this.selectedFile3, this.selectedFile3.name);
    this.request.businesspan4(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.profi3 = data.a;
        this.message3 = data.b;
        this.selectedFile3 = null;
        console.log("neeeeeeeeee", this.profi3);



      },
      error => console.log("erroorrrr", error)
    );
  }

  docsSubmitted(){
    const dialogRef = this.dialog.open(DocsUploadSucess, {
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog sent: ${result}`); 
      this.router.navigate(['/Borrower_Dashboard/Dashboard-Details']);
      //this.name = result;
    });
  }

}
@Component({
  selector: 'DocsUploadSucess',
  templateUrl: 'DocumentsSucessfullyUploaded.html',
  styleUrls: ['./upload-docs.component.css']
})
export class DocsUploadSucess{

  constructor(
    public dialogRef: MatDialogRef<DocsUploadSucess>,public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
      dialogRef.disableClose = true;
    }
}


