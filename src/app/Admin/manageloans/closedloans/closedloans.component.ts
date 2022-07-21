
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AdminserviceService } from '../../../services/adminservice.service';
declare var $;

@Component({
  selector: 'app-closedloans',
  templateUrl: './closedloans.component.html',
  styleUrls: ['./closedloans.component.css']
})
export class ClosedloansComponent implements OnInit {
@ViewChild('closedloan') closedloan:ElementRef;

  constructor(public request:AdminserviceService) { }

  ngOnInit() {
  	this.closed_loan()
  }


public closedloans = [];  
closed_loan(){
 	this.request.closed_loaninfo().subscribe(data =>{
    console.log("***** Closed Loan*****",data);
    this.closedloans=data.data;
    console.log("------ CLOSED LOAN -----",this.closedloans);

    });

}


public closedld:any = {};
getCompleteClosedLoans(closedloan)
{
  for (let i = 0; i < this.closedloans.length; i++) {
 
     console.log("((((((((()))))))))",this.closedloans[i].id);
  if(this.closedloans[i].id == closedloan){
    this.closedld = this.closedloans[i]
    console.log("******CLOSED LOANS******",this.closedld);
   $(this.closedloan.nativeElement).modal('show'); 
 }
}
}


cancel(){
$(this.closedloan.nativeElement).modal('hide'); 
}


}
