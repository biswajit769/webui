import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AdminserviceService } from '../../../services/adminservice.service';
declare var $;

@Component({
  selector: 'app-acceptedloans',
  templateUrl: './acceptedloans.component.html',
  styleUrls: ['./acceptedloans.component.css']
})
export class AcceptedloansComponent implements OnInit {
	@ViewChild('acceptedloan') acceptedloan:ElementRef;

  constructor(public request:AdminserviceService) { }

  public searchCompany:string;
  public companySearch:string;

  ngOnInit() {
  	this.accepted_loan();
  }




public acceptedloans = [];  
accepted_loan(){
 	this.request.accepted_loaninfo().subscribe(data =>{
    console.log("########",data);
    this.acceptedloans=data.data;
    console.log("------ ACCPTED LOAN -----",this.acceptedloans);

    });

}

public acceptedld:any = {};
getCompleteAcceptedLoans1(acceptloan)
{
  for (let i = 0; i < this.acceptedloans.length; i++) {
 
     console.log("((((((((()))))))))",this.acceptedloans[i].id);
  if(this.acceptedloans[i].id == acceptloan){
    this.acceptedld = this.acceptedloans[i]
    console.log("************",this.acceptedld);
   $(this.acceptedloan.nativeElement).modal('show'); 
 }
}
}


cancel(){
$(this.acceptedloan.nativeElement).modal('hide'); 
}


}
