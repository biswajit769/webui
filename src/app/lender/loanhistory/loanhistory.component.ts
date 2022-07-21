
import { LenderserviceService } from '../../services/lenderservice.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare var $;


@Component({
  selector: 'app-loanhistory',
  templateUrl: './loanhistory.component.html',
  styleUrls: ['./loanhistory.component.css']
})
export class LoanhistoryComponent implements OnInit {
  @ViewChild('loanhistory') loanhistory: ElementRef;

  constructor(private lenderserviceService: LenderserviceService) { }

  ngOnInit() {
    this.lend_loan_history();
  }
  public lendloanhistroy: any = [];
  public poplendloanhistroy: any = [];
  public poplendloan: any = [];
  public poplendloan2: any = [];
  public poplendloan3: any = [];
  public poplendloan4: any = [];
  public poplendloan5: any = [];
  public poplendloan6: any = [];
  public poplendloan7: any = [];
  public poplendloan8: any = [];
  public poplendloan9: any = [];
  lend_loan_history() {
    this.lenderserviceService.Lend_history().subscribe(data => {
      console.log("Closed Loan Data", data);
      this.lendloanhistroy = data;
      console.log("**********", this.lendloanhistroy);

    });
  }



  loan_details(view:any) {
    console.log("-----iddddd---", view);
    this.lenderserviceService.Lend_history_popup({ 'id': view }).subscribe(data => {
      console.log("Closed Loan Data", data);
      this.poplendloanhistroy = data.data;
      this.poplendloan = data.data2;
      this.poplendloan2 = data.data2;
      this.poplendloan3 = data.data2[0]['loan_id'];
      this.poplendloan4 = data.data2[0]['loan_amount'];
      this.poplendloan5 = data.data2[0]['loan__interest_amount'];
      this.poplendloan6 = data.data2[0]['disbursed_amount'];
      // this.poplendloan3=data.data2[0]['loan_id'];
      // this.poplendloan3=data.data2[0]['loan_id'];
      // this.poplendloan3=data.data2[0]['loan_id'];
      // this.poplendloan3=data.data2[0]['loan_id'];

      // console.log("****popppppp******",this.poplendloanhistroy);
      console.log("****popppppp******", this.poplendloan);
      console.log("****333333333333******", this.poplendloan3);


    });
    $(this.loanhistory.nativeElement).modal('show');
  }



}
