import { AdminserviceService } from '../../services/adminservice.service';
import { Component, OnInit,ElementRef, ViewChild,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import {Pipe, PipeTransform} from '@angular/core';
declare var $:any;
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class PaymentinfoComponent implements OnInit {
@ViewChild('paymentview') paymentview:ElementRef;
 @ViewChild('paymentview1') paymentview1:ElementRef;
  constructor(private dialog: MatDialog,private request: AdminserviceService,private router: Router) { }

  ngOnInit() {
    this.todyadues();
  }

public todaysinfo:any={};
   todyadues(){
    this.request.payment_info().subscribe(data =>{
      console.log("---!!!!@@@@!!!!----",data);
      this.todaysinfo=data;
      console.log("******PAAAAAAAAAAA****",this.todaysinfo);

    });
}
public paymentinformataions=[];
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='600px';
    dialogConfig.height='300px';
    dialogConfig.position = {
      top: '240px',
      left: '450px'
  };
  dialogConfig.data = {
   todaysdues :this.todaysinfo
};
   const dailogRef = this.dialog.open(paymentdetaispopupComponent, dialogConfig);
dailogRef.afterClosed().subscribe(result=>{
  this.paymentinformataions = result;
  console.log("ffff",result);
   console.log("ffjjj", this.paymentinformataions);
})
}

public popuptodaydues:any= [];

  todaydues_details(data){
    console.log("---loan iddd----",data);
      for (let i = 0; i < this.paymentinformataions.length; i++) {
 
     console.log(this.paymentinformataions[i].loan_id);
  if(this.paymentinformataions[i].loan_id == data){
    this.popuptodaydues = this.paymentinformataions[i]
    console.log("_---=====---",this.popuptodaydues);

$(this.paymentview.nativeElement).modal('show'); 
  }


}

}
}





@Component({
  selector: 'paymentdetais',
  templateUrl: './paymentdetais.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class paymentdetaispopupComponent implements OnInit {
  constructor(
      private dialogRef: MatDialogRef<paymentdetaispopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,public request:AdminserviceService,private router: Router) {
  }

  ngOnInit() {
  
  }
  
  showtab1 = true;
  showtab2: boolean;
  showtab3: boolean;
  showtab4: boolean;
  public days:any;
  payment(obj:any) {
    this.days=obj;
    this.showtab1 = true;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = false;
    this.apply();
  }
  todays(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = true;
    this.showtab3 = false;
    this.showtab4 = false;
     this.apply();
  }
  segregatedpayment(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = true;
    this.showtab4 = false;
     this.apply();
  }
  latePayments(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = true;
     this.apply();
  }
  public recalll(data){ 
    this.request.changeMessage(data);

}
  public paymentmethods_days;
  apply() {
    console.log(this.days);
    if(this.days =='delayed' || this.days =='late'){
    this.request.segrated_infoo1({'day':this.days}).subscribe(data =>{
      console.log("---!!!!@@@@!!!!----",data);
      this.paymentmethods_days = data;
      this.recalll(data);
     
    
    });


    }else{
       this.request.payment_info1({'day':this.days}).subscribe(data =>{
      console.log("---!!!!@@@@!!!!----",data);
      this.recalll(data);
      this.paymentmethods_days = data;
    
    });
    }
    
      
  }

 
}


