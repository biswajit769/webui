import { Component, OnInit } from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.css']
})
export class LoanHistoryComponent implements OnInit {

  constructor(private Borrowerservice: BorrowerserviceService) { }

  ngOnInit() {
  	this.loan_history();
  }

  public loanhistroy = [];
    loan_history(){
    this.Borrowerservice.borrow_history().subscribe(data =>{
      console.log("Closed Loan Data",data);
      this.loanhistroy=data;
      console.log("########",this.loanhistroy);

    });

  }

}
