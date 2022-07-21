import { Component, OnInit } from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';


@Component({
  selector: 'app-borrower-latepayment',
  templateUrl: './borrower-latepayment.component.html',
  styleUrls: ['./borrower-latepayment.component.css']
})
export class BorrowerLatepaymentComponent implements OnInit {

  constructor(private Borrowerservice: BorrowerserviceService) { }

  ngOnInit() {
  	this.latepayment();
  } 

    public payinfo = [];
    latepayment(){
    this.Borrowerservice.payment_late().subscribe(data =>{
      console.log("Lateeeeeeeeeee",data);
      this.payinfo=data;
      console.log("########",this.payinfo);

    });

  }

}
