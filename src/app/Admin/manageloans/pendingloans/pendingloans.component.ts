import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AdminserviceService } from '../../../services/adminservice.service';
declare var $;

@Component({
  selector: 'app-pendingloans',
  templateUrl: './pendingloans.component.html',
  styleUrls: ['./pendingloans.component.css']
})
export class PendingloansComponent implements OnInit {
   @ViewChild('pendingloanpopup') pendingloanpopup:ElementRef;

  constructor(public request:AdminserviceService) { }

  ngOnInit() {
    this.pending_loan();

  }
public status1:boolean=true;  
public status2 

edit(id){
  console.log('loanid',id);
  this.status1 = this.status1;
  this.status2 = id;


}



cancel(){
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.pending_loan();

}


public rateofinterests = ['0.5','0.8','1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0']  
public pendingloan:any = [];  
pending_loan(){
    this.request.pending_loaninfo().subscribe(data =>{
    console.log("########",data);
    this.pendingloan=data.data;
    console.log("Processing NBFC",this.pendingloan);

    }); 

}

public loanpending:any = {};
getCompletePendingLoans(pending)
{
for (let i = 0; i < this.pendingloan.length; i++) {
 
     console.log("((((((((()))))))))",this.pendingloan[i].id);
  if(this.pendingloan[i].id == pending){
    this.loanpending = this.pendingloan[i]
    console.log("************",this.loanpending);
 $(this.pendingloanpopup.nativeElement).modal('show'); 
}
}
}

cancel1(){
$(this.pendingloanpopup.nativeElement).modal('hide'); 

 
}


saveloaneditables(pending){
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  console.log("------Intrerest-------",pending);
  this.request.saveSelectedInterest(pending).subscribe(data =>{
  console.log("########",data);
   
   });

}







}
