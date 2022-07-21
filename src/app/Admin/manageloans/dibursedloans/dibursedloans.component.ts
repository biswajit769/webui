import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AdminserviceService } from '../../../services/adminservice.service';
declare var $;


@Component({
  selector: 'app-dibursedloans',
  templateUrl: './dibursedloans.component.html',
  styleUrls: ['./dibursedloans.component.css']
})
export class DibursedloansComponent implements OnInit {
	@ViewChild('disbusredloan') disbusredloan:ElementRef;

 
   
  constructor(public request:AdminserviceService) { }
   
   public borrowerDeatil:string;
   public searchBorrower:string;

  ngOnInit() {
  	this.loan_disbures();
  }


public disloan = [];  
loan_disbures(){
 	this.request.disbursed_loan().subscribe(data =>{
    console.log("########",data);
    this.disloan=data.data;
    console.log("------ Disssss LOAN -----",this.disloan);

    });

}


close_admin()
{
	$(this.disbusredloan.nativeElement).modal('hide'); 
}


public disbursedetails:any = {};
public disbursloan:any = {};
public details=[];

loan_disburesinfo(details){
  console.log("########",details);
   this.request.disbusredinfo({'loanid':details}).subscribe(data =>{
    console.log("########",data);
    this.disbursedetails=data;
    this.details = data.details;

      for (let i = 0; i < this.disloan.length; i++) {
 
     console.log("((((((((()))))))))",this.disloan[i].id);
  if(this.disloan[i].id == details){
    this.disbursloan = this.disloan[i]
    console.log("*******DiSSSSmisss*****",this.disbursloan);
  
}
 }

    console.log("########", this.disbursedetails);
    $(this.disbusredloan.nativeElement).modal('show'); 

    });

}





}
