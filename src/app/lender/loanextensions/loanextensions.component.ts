import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {LenderserviceService} from '../../services/lenderservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Router} from '@angular/router';
// import * as jsPDF from 'jspdf';
declare var $:any;
@Component({
  selector: 'app-loanextensions',
  templateUrl: './loanextensions.component.html',
  styleUrls: ['./loanextensions.component.css']
})
export class LoanextensionsComponent implements OnInit {
   @ViewChild('AllData') AllData:ElementRef;
   @ViewChild('content') content:ElementRef;




  constructor( public lendserv:LenderserviceService,public dialog: MatDialog, public router:Router ) { 
  }

//   DownloadPdf(){

//     let doc = new jsPDF();

//     let specialElementHandlers = {
//       '#editor':function(element,renderer){
//         return true;
//       }
//     };

//     let content = this.content.nativeElement;

//     doc.fromHTML(content.innerHTML,15,15,{
//       'width' : '100%',
//       'elementHandlers': specialElementHandlers
//     });
//     doc.save('finchain.pdf');
  
// }
 
  weekdata;
  public length : any = {}

  ngOnInit() {
    let finaldata = {"data":"all"}
  this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
           this.weekdata = backenddata;
           console.log("ALLLLLLLLAAAAALLLLLL",this.weekdata)

     });
  this.weekdata = this.lendserv.weekdata123;
  console.log("Q@@@@@@@@@@@@@@@@@@@@@@",this.weekdata);
}


 GetDetails(): void {
    const dialogRef = this.dialog.open(AccStatement, {
      // width: '250px',
    });

     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.weekdata = result;
    });
  }

  

  DownloadPdf(){
    console.log("wwwwwwwwwwwww");
  }
  


}


@Component({
  selector: 'StatementForACC',
  templateUrl: 'statement.html',
})
export class AccStatement {

  constructor(
    public dialogRef: MatDialogRef<AccStatement>,public lendserv:LenderserviceService ,public router:Router) {}

  onNoClick(): void {
    // this.dialogRef.close();
    this.router.navigate([''])
  }




  weekdata;
  bgcolor;
  oneweek(data){
    this.bgcolor ='green'
        let finaldata = {"data" : data}
     this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
       console.log("111111111111weeeeeeeeeekkkkkkkkkkkkkkk",backenddata);
       this.weekdata = backenddata;
       this.lendserv.weekdata123 = backenddata;
     });

  }

 public backcolor;
 today1(data){
this.backcolor = 'green';
    
   let finaldata = {"data" : data}
   this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
     this.weekdata = backenddata;
            this.lendserv.weekdata123 = backenddata;
      console.log("todayyyyyyyyyyyyyy", backenddata);

     });


 }
 bccolor;
 yesterday1(data){
   this.bccolor = 'green';
   let finaldata = {"data" : data}
   this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
     this.weekdata = backenddata;
            this.lendserv.weekdata123 = backenddata;
    console.log("yesterrrrrrrrrrrrrrrrr", backenddata);

     });


 }
 bcgcolor
 last2dys(data){
   this.bcgcolor = 'green';
   let finaldata = {"data" : data}
   this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
     this.weekdata = backenddata;
            this.lendserv.weekdata123 = backenddata;
     console.log("22222222222222222222", backenddata);

     });


 }
 
 backclr;
 thirtydys(data){
   this.backclr= 'green';
   let finaldata = {"data" : data}
   this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
     this.weekdata = backenddata;
            this.lendserv.weekdata123 = backenddata;
            console.log("3000000000000000", backenddata);
     });

 }
 public filterdate;

 getByEnteredDate($event){
   console.log("mahioiiiiiiiiiiiiiiiiiiii",$event.value);
   let finaldata = {"data" : $event.value}
   this.lendserv.lendstatement(finaldata).subscribe(backenddata=>{
     this.weekdata = backenddata;
            this.lendserv.weekdata123 = backenddata;
            console.log("MYYYYYDATESSSSSSSSSSSSSSS", backenddata);
     });

 }


 crossmark() {
   console.log("hittttttttttttttttttttt")
   this.dialogRef.close();
   this.router.navigate(['lenderdashboard'])

 }


}